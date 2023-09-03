---
title: 使用 console 來下載 JS 物件
date: 2020-06-29 13:59:10
tags: 
- JavaScript
categories: 前端技術
keywords: js, console, download, dev, tool, object
---


在測試、開發或研究別人網頁的時候，有時候需要 console 一些物件檢查，但是在 DevTools 視窗內物件有時候會變成 `[object]` 或陣列變成 `[Array]` 之類的東西，沒辦法看到內部的資料，更沒辦法拿來分析，用 Json 字串也不好閱讀。

<!-- more -->

剛好我在 [stackoverflow](https://stackoverflow.com/questions/11849562/how-to-save-the-output-of-a-console-logobject-to-a-file) 上找到了這個方法，可以直接的把物件下載下來，解決了上面的問題。

```javascript
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)
```

Source: http://bgrins.github.io/devtools-snippets/#console-save