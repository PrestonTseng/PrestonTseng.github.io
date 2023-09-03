---
title: 將 Vue.js 專案架設到 Azure Static Web Apps
date: 2020-12-31 16:37:40
tags: 
- Azure
- Vue
categories: Azure
keywords: Vue, js, Azure, azure, static, web, apps, app
---

## 前言

要將靜態網頁免費架設在網路上，很多人腦袋會直覺反射 GitHub Page ，但現在有了另一個選擇 -- Azure Static Web Apps ，他可以連結 GitHub Repo. 的某個 branch ，在你推新版本上去的時候， GitHub Action 會自動觸發進行 CI/CD ，然後自動更新 Static Web Apps ，比起 GitHub Page 還要手動控制 gh-pages 的分支，我認為 Static Web Apps 會方便很多，再加上 Static Web Apps 目前是免費的狀態，我認為很值得一試。

<!-- more -->

然而我在架設 Static Web Apps 的時候遇到了一些雷，我決定記錄一下架設的流程，不然可能過幾天我又忘記了。

## 第一步：將專案推送到 GitHub

在 GitHub 開好 repo. 後，就將專案推上 GitHub 吧！

**要注意的是**，如果你的 Vue 專案的 route 使用的是 history mode ，要在 /public 底下加上一個 `routes.json` ，不然 callback 的時候 Static Web Apps 會顯示 404 。

/public/routes.json
```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ]
}
```

## 第二步：到 Azure Portal 新增 Static Web Apps

首先進入到 [portal.azure.com](https://portal.azure.com/)，選擇 Create a resource 。

![step01](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/01.png)

接著搜尋並進入 Static Web Apps 。

![step02](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/02.png)

按下 Create 。

![step03](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/03.png)

將基本資料填一填後，按下下方藍色的 "Sign in with GitHub" 來登入 GitHub。

* **Subscription**: 你的訂閱方案
* **Resource Group**: 你想要把這個服務歸類在哪個資源群組
* **Name**: 這個服務的名稱（在 portal 管理用的名稱）
* **Region**: 服務要架設在哪個地方，在台灣的話建議使用東亞，傳輸會比較快。
* **SKU**: 付費方案，目前是免費的。

![step04](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/04.png)

按下綠色的 "Authorize Azure-App-Service-Static-Web-Apps" 來授權 Azure 取得 GitHub 的資訊。

![step05](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/05.png)

接著填寫詳細的資料設定：

* **Organization**: 如果你的 GitHub 帳號沒有在任何組織下，應該只會出現你的帳號
* **Repository**: 選擇你要架設的 repo.
* **Branch**: 選擇你要架設的 branch

* **Build Presets**: 選擇你的框架，這邊是以 Vue.js 作為範例
* **App location**: 選擇你的網頁在 repo. 的路徑
* **Api location**: 選擇你的 api 的路徑，api 是由 Azure Function 組成的，這裡因為沒有要使用到 api 所以空著
* **App artifact location**: 你的網頁 build 完後的檔案在哪裡

接著按下 "Review + create"

![step06](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/06.png)

確認沒問題後就可以按下 "Create 送出了"

![step07](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/07.png)

接著就可以到 portal 找到你的 Static Web Apps 的管理頁面，右上方的 url 就是你的網頁的 url ，等到 GitHub Action 的 CI/CD 完成後就可以進入網頁了。

![step08](/images/Deploy-Vue.js-to-Azure-Static-Web-Apps/08.png)