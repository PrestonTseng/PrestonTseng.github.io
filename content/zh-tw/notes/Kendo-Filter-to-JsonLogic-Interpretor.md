---
title: Kendo Filter to JsonLogic 轉譯器
date: 2020-06-29 14:12:13
tags: 
- JavaScript
- Kendo
- JsonLogic
categories: 前端技術
keywords: kendo, jsonlogic, translate
---

在工作上遇到前後端使用的邏輯套件不同，所以需要有一個方法把前端的 Kendo Filter 在後端轉換成 JsonLogic 存起來，於是就開始研究怎麼樣轉換比較好。

[Github Repository](https://github.com/JackyTPY/KendoFilter2JsonLogic)

<!-- more -->

# 概念

## Input

Input 是如下所示的 KendoFilter 巢狀條件結構:
```json
{
    "logic": "and",
    "filters": [
        {
            "field": "price",
            "value": 10,
            "operator": "gt"
        },
        {
            "logic": "or",
            "filters": [
                {
                    "field": "name",
                    "value": "salad",
                    "operator": "contains"
                },
                {
                    "field": "name",
                    "value": "sushi",
                    "operator": "contains"
                }
            ]
        }
    ]
}
```

值得注意的地方有兩個:

```json
{ "logic": "", "filter": [] }
{ "field": "", "value": "", "operator": ""}
```

1. 條件有上述兩種
1. logic 只有 "and" 跟 "or" ，並且在 filters 內放入條件


## 解構的部分

```javascript
const Kendo2JsonLogic = function (rule) {
  let result = analyzeLogic(rule)
  return result
}
```

```javascript

function analyzeLogic(rule) {
  let result = []

  switch (rule.logic) {
    case 'and':
      rule.filters.forEach(e => {
        result.push(analyzeLogic(e))
      })
      return { 'and': result }

    case 'or':
      rule.filters.forEach(e => {
        result.push(analyzeLogic(e))
      })
      return { 'or': result }

    default:
      return analyzeOperator(rule)
  }
}
```

```javascript
function analyzeOperator(rule) {
  switch (rule.operator) {
    case 'eq':
      return { '==': [{ 'var': rule.field }, rule.value] }

    case 'neq':
      return { '!=': [{ 'var': rule.field }, rule.value] }

    case 'lt':
      return { '<': [{ 'var': rule.field }, rule.value] }

    case 'lte':
      return { '<=': [{ 'var': rule.field }, rule.value] }

    case 'gt':
      return { '>': [{ 'var': rule.field }, rule.value] }

    case 'gte':
      return { '>=': [{ 'var': rule.field }, rule.value] }

    case 'contains':
      return { 'in': [ {'lc': rule.value}, {'lc': { 'var': rule.field }}] }

    case 'doesnotcontain':
      return { '!': [{ 'in': [ {'lc': rule.value}, {'lc': { 'var': rule.field }}] }] }

    case 'isnull':
      return { '==': [{ 'var': rule.field }, null] }

    case 'isnotnull':
      return { '!=': [{ 'var': rule.field }, null] }

    case 'startswith':
      return { '==': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, 0, rule.value.length] }}] }

    case 'doesnotstartwith':
      return { '!=': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, 0, rule.value.length] }}] }

    case 'endswith':
      return { '==': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, -rule.value.length] }}] }

    case 'doesnotendwith':
      return { '!=': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, -rule.value.length] }}] }

    case 'isempty':
      return { '!': [{ 'var': rule.field }] }

    case 'isnotempty':
      return { '!!': [{ 'var': rule.field }] }
  }
}
```

因為其實 KendoFilter 的 Operator 不多，型態與其他需要嚴謹處理的部分在前端 Kendo 已經幫我們把關好了，我們要做的只剩簡單的轉譯，與其大費周章系統化轉譯，我認為直接用 switch case 把基本的幾種組合寫好，再用遞迴進行排列組合就開發上會比較有效率，而且也比較好維護。

# 遇到的困難
做完轉譯器後，有幾個特別要注意的地方：

* JsonLogic 的字串比較是考慮大小寫的，而 KendoFilter 並不是
* JsonLogic 並沒有支援 startwith 跟 endwith

## 大小寫的部分

```javascript
function toLowerCase(a){
  return a.toLowerCase()
}

jsonLogic.add_operation("lc", toLowerCase);
```
我在 JsonLogic 中新增了一個 operator --- "lc" 來實作 .toLowerCase() ，每次比較字串的時候，先包上一層 lc 再來比較，以確保可以忽略大小寫，在下面可以看到例子。

然而後端是用 [JsonLogic.NET](https://github.com/yavuztor/JsonLogic.Net) ，這套件並不是官方維護的，不確定大小寫的判定方式如何，也不確定是否支援上述新增 operator 的方法，有待討論過後再決定...


## startwith 跟 endwith 的部分

```javascript
case 'startswith':
      return { '==': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, 0, rule.value.length] }}] }

case 'doesnotstartwith':
      return { '!=': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, 0, rule.value.length] }}] }

case 'endswith':
      return { '==': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, -rule.value.length] }}] }

case 'doesnotendwith':
      return { '!=': [{'lc': rule.value}, {'lc': { 'substr': [{ 'var': rule.field }, -rule.value.length] }}] }
```
運用 "substr" 將開頭或結尾與 Value 等字數的字串切下來進行 "==" 比較，完成 startwith 與 endwith。

## 參考資料：
* [QueryBuilder](https://querybuilder.js.org/demo.html)
* [Kendo Filter Example](https://demos.telerik.com/kendo-ui/filter/index)
* [Kendo Filter API ](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/filter)
* [JsonLogic](http://jsonlogic.com/)
* [QueryBuilder to JsonLogic Example](https://github.com/ukrbublik/react-awesome-query-builder)