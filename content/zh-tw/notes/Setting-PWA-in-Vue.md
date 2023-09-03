---
title: 在 Vue 中設定 PWA
date: 2020-06-29 13:18:33
tags: 
- PWA
- Vue
- JavaScript
categories: 前端技術
keywords: vue, pwa, service, worker, sw, js
---

最近開始使用 Vue 來作為前端開發的框架，但是關於 PWA 的部分， Vue 會動態依照設定的資料產生固定的 Manifest ， Service Worker 也是使用 Workbox 來自動產生，在一般使用情形下是很方便，但是如果要做到比如說動態 Manifest 設定的話就會很麻煩，於是我就又掉入一個坑了。 

<!-- more -->

# 目標

* 將環景資料儲存於快取中，支援離線與優化體驗
* 當資料更新時，更新快取來讓資料保持最新
* 當程式碼更新時，更新 service worker 來更新服務

# Vue 原本的附加 pwa 機制

Vue 專案在建立的時候可以選擇加入 PWA 的 plugin，`npm run build`之後就會自動依據你的設定生產出 PWA 需要的文本，包括 manifest.json 與 service-worker.js。

Vue 用的是 google 開發的 workbox 來處理 precache 的部分，但因為pano 的情況比較特殊，所以在這裡 service-worker 的部分我就自己寫了。

# manifest 的設定

manifest.json 是一份文件，用來定義 PWA 在下載到桌面的時候，名字與介面形式長怎樣，然而 iOS 是不吃 manifest.json 而是有不一樣的設定，這些網路上有很多資源可以看，在這邊就不贅述了，例如：[PWA學習筆記-4：manifest.json](https://medium.com/front-end-augustus-study-notes/pwa-minifest-6943b5fc65a9)。

在 vue.config.js 中，我們可以設定好 manifest 的相關設定，之後 build 起來的同時，Vue 會幫我們依照這裡的設定生成 manifest.json 以及 workbox 相關文件。

```javascript
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',


    // 如果想要自己寫 service-worker.js
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },
    
    // 如果想要讓他自己生產
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // 不等待 terminated 直接取代舊的 service-worker
      // 解決無法自動更新的問題
      skipWaiting: true
    }
  }
}
```

這個 build 完就會成為 dist 資料夾中的某些靜態檔案內容，並不能動態生成，但是 pano 有許多不同的環景專案，我不希望每個專案在下載到桌面的時候都叫做 "Syncobox Panorama"，我希望每次下載的時候， app 顯示名稱可以是那個專案的名字，為此我用了另一個比較暴力的方法。

# 動態 manifest.json

前端沒有辦法進行檔案讀寫，因此我們必須利用動態生成 blob 來進行 manifest.json 即時竄改的部分。

首先，要先在 Vue 的 PWA 設定中開啟 iOS 的支援。

```javascript
module.exports = {
  "pwa": {
    "appleMobileWebAppCapable": "yes", // 這裏
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "src/service-worker.js"
    }
  }
  ...
}
```

然後，我們得先知道，我們是在 build 完的檔案是在哪裡定義 manifest.json 的。

/dist/index.html
```htmlmixed
<head>
  ...
  <link rel=manifest href=/manifest.json>
  <meta name=theme-color content=#4DBA87>
  <meta name=apple-mobile-web-app-capable content=yes>
  <meta name=apple-mobile-web-app-status-bar-style content=default>
  <meta name=apple-mobile-web-app-title content=syncobox_panorama_pwa>
  <link rel=apple-touch-icon href=/img/icons/apple-touch-icon-152x152.png>
  <link rel=mask-icon href=/img/icons/safari-pinned-tab.svg color=#4DBA87>
  <meta name=msapplication-TileImage content=/img/icons/msapplication-icon-144x144.png>
  <meta name=msapplication-TileColor content=#000000>
  ...
</head>
```

知道位置後我們就可以來用進行複寫了，首先我們需要先定義好新的 manifest.json 內容。

/src/viewed/PanoViewPage.vue
```javascript
method: {
    ...
    define_manifest() {
      let manifest = {
        name: this.project.scene.name,
        short_name: this.project.scene.name,
        theme_color: "#4DBA87",
        icons: [
          {
            src: `${this.API.pano_url.getImage}/${this.project.scene.id}/pwa_thumb_512.png`,
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: `${this.API.pano_url.getImage}/${this.project.scene.id}/pwa_thumb_512_mask.png`,
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        start_url: `${window.location.origin}/${this.$route.params.shareCode}`,
        display: "standalone",
        background_color: "#000000"
      };
      this.set_manifest(manifest);
    }
    ...
}
```

然後再進行設定，這裡連 iOS 的設定也要根據新的 manifest 內容進行更新。

/src/viewed/PanoViewPage.vue
```javascript
method: {
    ...
    set_manifest(json) {
      const stringManifest = JSON.stringify(json);
      const blob = new Blob([stringManifest], {
        type: "application/json"
      });
      const manifestURL = URL.createObjectURL(blob);
      document.head
        .querySelector("[rel~=manifest]")
        .setAttribute("href", manifestURL);

      // for apple
      document.head.querySelector(
        "[name~=apple-mobile-web-app-title]"
      ).content = json.name;
      document.head.querySelector(
        "[rel~=apple-touch-icon]"
      ).href = `${this.API.pano_url.getImage}/${this.project.scene.id}/thumb.jpg`;

      // for ms
      document.head.querySelector(
        "[name~=msapplication-TileImage]"
      ).content = `${this.API.pano_url.getImage}/${this.project.scene.id}/thumb.jpg`;
    }
    ...
}
```

然後每當資料更新的時候執行。

/src/viewed/PanoViewPage.vue
```javascript
updated() {
    this.define_manifest();
}
```

# Service worker

Vanilla JS 的寫法請參照 [Service Worker 筆記](/KDLrWcbESxS0OuUlMIHDcw)，先看完再往下看比較好喔。

下面只有 Vue 的特殊情況才會說明。

# Service worker 註冊

如果是用 Vue 自帶的 PWA 套件的話，他都應該幫你設定好了，在網路上也可以很容易的搜尋到相關教學，這部分我就不寫了。

這裡要寫的是，我不想用 Vue 的 service worker，我想要自己重頭來的話，應該要怎麼做。

我們可以在 src 中新增一個 service-worker.js (位置一定要在這，不然 build 的時候 Vue 會找不到），然後在入口頁面的 created() 中新增註冊事件。

```javascript
if ("serviceWorker" in navigator) {
      await navigator.serviceWorker.register(
        `/service-worker.js?shareCode=${encodeURIComponent(
          this.$route.params.shareCode
        )}`
      )
      .then(reg => {
        reg.update() //如果有新的 servcie worker 的話，就更新覆蓋掉舊的
      });
    }
```

# 靜態檔案快取

Vue 產生的 service-worker.js 中，我們可以發現有一行長得像下面這樣：

```javascript
self.__precacheManifest = [].concat(self.__precacheManifest || []);
```

這是因為 Vue 有使用 Google 開發的 Workbox 套件，在 ```npm run build```之後會自動把靜態檔案們的目錄編輯成一個 js 檔以進行快取。但是在這個專案中，環景資料必須要自己快取，因此我就刪掉了 workbox 的程式碼，用這個目錄自己跟 fetch 到的環景資料一起快取了。




# 一些有關於 PWA in iOS 的新資訊
* [What’s new on iOS 12.2 for Progressive Web Apps](https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945)
* [Progressive Web Apps in 2020](https://medium.com/@firt/progressive-web-apps-in-2020-c15018c9931c)
* [iPhone 11, iPadOS and iOS 13 for PWAs and web development](https://medium.com/@firt/iphone-11-ipados-and-ios-13-for-pwas-and-web-development-5d5d9071cc49)

> ![](https://i.imgur.com/hv32G07.png)
> New PWA Lifecycle on iOS 12.2 according to my testing. focus, blur and visibility events only happen when loaded over HTTPS.
> 


Reference：

* [Workbox InjectManifest API](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest#InjectManifest)
* [Krpano](https://krpano.com/home/)
* [Service Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
