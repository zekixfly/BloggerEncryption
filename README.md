# Google Blogger 文章加密系統

- https://zekixfly.github.io/BloggerEncryption/index.html

使用方式為:

1. 先嵌入本網頁的 JS。
2. 將您要加密的文章，貼到本網頁進行加密，並將產出的 HTML Code 取代回原本的文章。

## 嵌入 JS

請先嵌入以下的 JS 到您 Blogger 中，嵌入方式為在 Blogger 後台的 "主題">"編輯 HTML"，將本 JS 嵌入到`<head>...</head>`之中。

```js
<script
  type="text/javascript"
  src="https://zekixfly.github.io/BloggerEncryption/zekiencryption.js"
></script>
```

## 加密文章

1. 在 Blogger 上，將您要加密的文章，從"撰寫模式"切換成"HTML 檢視"，並把 HTML 原始碼複製下來。

2. 將複製下來的 HTML 原始碼，貼在本網頁系統上的 Plain Text 欄位中。

3. 在本網頁系統上的 Key 欄位中，在左邊欄位輸入您欲上鎖的密碼(`**請記得您的密碼，忘了本人也無法救回**`)，右邊則可以輸入密碼提示(可不輸入)。

4. 在 Plain Text 欄位中並按下右邊的 Encrypt 按鈕進行加密，將會產生 HTML Code，並且複製下來。

5. 最後，將複製下來的加密 HTML Code 在 Blogger 的"HTML 檢視"模式下取代原本的文章，一篇上鎖的文章就大功告成了!!
