---
title: Service Worker 離線支援
date: 2020-06-29 13:30:31
tags: 
- PWA
- JavaScript
categories: 前端技術
keywords: service, worker, sw, offline, pwa, js
---

剛好工作上要處理一個服務的離線存取功能，於是花了一些時間研究了一下 Service Worker ，發現透過 Service Worker 我們可以達成訊息推播、離線處理等功能，但是這裡只有提到離線存取的功能，推播可能之後會再補一篇吧。

<!-- more -->

# 生命週期
<center>
    <img src="https://i.imgur.com/tt6CltV.png" />
</center>

# 註冊

Service Worker 註冊完成後，瀏覽器才會開始執行背景安裝。

```javascript
if ('serviceWorker' in navigator) { // 檢查瀏覽器有沒有支援
  navigator.serviceWorker
    .register('/serviceWorker.js') // 註冊 Service Worker
    .then(reg => {
      console.log('Registration succeeded. Scope is ' + reg.scope); // 註冊成功
      reg.update(); // 如果已經有 sw 在運行，安裝完成後覆蓋掉舊的
    })
    .catch(error => {
      console.log('Registration failed with ' + error); // 註冊失敗
    });
}
```

## 如何在一開始傳參數給 service worker 進行初始化?

我們可以在註冊的時候，在 service-worker.js 的路徑上加上 query 。

```javascript
if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(
        `/service-worker.js?shareCode=${encodeURIComponent(
          this.$route.params.shareCode // 從 Vue 的路由取得 shareCode
        )}`
      )
      .then(reg => {
        reg.update()
      });
    }
```

然後在 service-worker.js 中，我們可以這樣取得。

```javascript
var shareCode = new URL(location).searchParams.get('shareCode');
```

如果你想要在 service worker 安裝時就將所有線上檔案離線，用這個方法可以先取得你要的資訊，然後直接 fetch 資料存快取。

## 一般情況下 DOM 與 service worker 的溝通

這個方法只能在 service worker 啟動（activate）後執行。

在 ```service-worker.js```中向 client 傳送訊息。

```javascript
self.clients.matchAll() // 取得此 service worker 控管的所有 clients
    .then(function (clients) {
        if (clients && clients.length) {
            clients.forEach(function (client) {
                // 向 client 傳送 "hello client"
                client.postMessage('hello client');
            })
        }
    })
```

在 client 向 service worker 傳送訊息。

```javascript
// 向 service worker 傳送 "hello service worker"
navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage('hello service worker');
// 不只字串，也可以傳送物件
```

在 ```service-worker.js```中接收 client 傳送的訊息。
[與監聽事件的 Message 一樣](#Message)

```javascript
self.addEventListener('message', function (event) {
    console.log(event.data); 
    // "hello service worker"
});
```

在 client 接收 service worker 傳送的訊息。

```javascript
navigator.serviceWorker.addEventListener('message', event => {
    if (event.data === 'hello client') {
       // do something
    }
});

```

# 可以監聽的事件們

## Install

```javascript
self.addEventListener('install', function(event) {
    // 通常都在這裡快取離線需要的檔案
    
    event.waitUntil(
    // 安裝完畢後執行，執行完觸發下一個事件
    );
    
    self.skipWaiting();
    // 不等待執行完，直接 activate
    // 不等待舊 service worker terminated，直接 activate 覆蓋掉舊的
    // 不然 service worker 無法自動更新，會一值 waiting 等待舊的被手動終止
  );
});
```

## Activate
安裝成功後就會啟動。
當有超過一個 service worker 時，新的 service worker 安裝完不會馬上啟動，要關閉（寫好 code 或手動）所有舊的之後新的才會啟動。

```javascript
self.addEventListener('activate', event => {
    // 可以在這裡刪除舊的快取資料
    console.log('activated');
});
```

## Fetch

service worker 可以劫持 client 發出的 fetch ，並且使用 ```event.respondWith()``` 回傳 response 給 client 。

```javascript
self.addEventListener('fetch', function (event) {

  if (navigator.onLine) { 
    // 如果有網路狀態
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache.match(event.request.url).then(function (response) {
          return response || fetch(event.request.url)
          // 如果有找到快取就回傳快取
          // 如果沒找到就進行 fetch 
        });
      })
    )
  }
  else {
    // 沒網路狀態
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache.match(event.request.url, { ignoreSearch: true }) // 不偵測 url 中 ? 以後的 query
          .then(function (response) {
            return response
          });
      })
    )
  }
})
```

為了避免想要取得新資料卻因為 request url 的 response 已經被快取住了，永遠得不到新的資料，我都會在 url 後面接 ?[當下時間] 來確保可以 fetch 到新檔案。

但是在沒有網路的情況下，會得不到 response 而跳錯誤。因此在沒網路的狀態下要加上 ```{ignoreSearch: true}``` 來忽略 ? 後面的 query 來得到快取中的值。

## Message

```javascript
self.addEventListener('message', function (event) {
    console.log(event.data);
});
```

# 如何支援離線

在 PWA 中支援離線操作是很重要的一個特色，下面會介紹怎麼用 Cache 來達成這項事情。

當你把資料快取完之後，可以監聽[service worker 中的 fetch 事件](#Fetch)將 client 的 fetch 攔截後回傳你早就快取好的值。

## Cache

```javascript
var promise = [];

caches.open(cacheName) // 可以自己取一個 cache 集合的名稱
    .then(cache => {

      // 除了檔案，頁面也要記得快取。
      promises.push(cache.add(`/`))
      ...
      
      // 等所有的 cache 都完成之後，通知所有頁面
      Promise.all(promises).then(e => self.clients.matchAll().then(all => all.map(client => client.postMessage('cache done!'))))
    })
```

順帶一題```cache.add()``` 其實就等於
```javascript
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})
```