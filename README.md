# JuliesWeb
-----
## 專案初次設定紀錄
* 安裝Node.js https://nodejs.org/en/download/
    * 測試是否安裝成功
* 使用npm
    1.安裝nodejs會自動安裝npm
    2.套件管理工具，藉由npm去下載其它套件來使用
     （有兩種scope範圍，也就是套件可以安裝在全域，也可以安裝在特定資料夾）
    3.而你也可以把你自己的套件打包好放到NPM上讓其他人下載
    4.搜尋別人寫的package https://www.npmjs.com/package/react
    5.開啟terminal，輸入npm查看相關指令
    6.輸入npm init 並查看package.json
    7.試著安裝一個套件 npm install express --save
    8.有了package.json後輸入npm install 會自動安裝上面所寫出的套件

    ```npm init```
    * 已安裝 global gulp，跳過
    ```sudo npm install --global gulp-cli```

    * 安裝 local gulp
    ```npm install --save-dev gulp```

    * 安裝 gulp 外掛
   ``` npm install gulp-clean-css gulp-uglify gulp-concat gulp-rename gulp-sass gulp-load-plugins gulp-autoprefixer gulp-plumber del gulp-rsync gulp-file-include --save-dev```
-----
# 安裝fontawesome
    * Create a .npmrc file in the same place as the package.json file. (See FontAwesome guide)
    ```npm install --save-dev @fortawesome/fontawesome-pro```

-----
# bootstrap 4.4
    * https://getbootstrap.com/docs/4.4/getting-started/theming/
    npm install bootstrap --save
-----
#開發
* 在本機瀏覽器直接開啟 httpdocs/v2-demo/home.html

* 每次更新 src/scss 檔案後，將檔案輸出至 httpdocs/assets/css/:
gulp prod:css
每次更新 src/html 檔案後，將檔案輸出至 httpdocs/v2-demo/:

* gulp demo:html
加入新的第三方 CSS src/css/common/ 或 JS src/js/common/ 檔案後，將檔案輸出至 httpdocs/assets/:

```gulp prod:css:common
gulp prod:js:common

------
## 資料夾架構

```
JULIESWEB/
├── httpdocs/
│   ├── assests
│   ├──  ├── css
│   ├──  ├── img
│   ├──  ├── js
│   ├──  ├── webfonts
│   ├── v2-demo (build出的頁面)
├── node_modules/ (不上傳的大量外掛)
├── src/ (不上傳的大量外掛)
│   ├── css
│   ├── html
│   ├──  ├── partials
│   ├──  ├── ├──footer.html
│   ├──  ├── ├──head.html
│   ├──  ├── ├──header.html
│   ├──  ├── ├──menu.html
│   ├──  ├── ├──item.html
│   ├──  ├── ├──footer.html
│   ├──  ├── home.html
│   ├── img
│   ├── js
│   ├── scss
│   ├──  ├── components
│   ├──  ├── ├──_base.html
│   ├──  ├── ├──_carousel.html
│   ├──  ├── ├──_footer.html
│   ├──  ├── ├──_header.html
│   ├──  ├── ├──_header.html
│   ├──  ├── ├──_playlist.html
│   ├──  ├── app.sass
│   ├──  ├── bootstrap-custom.scss
├── gulpfile.js (gulp/task指令)
├── package-lock.json
├── package.json
├── README.md (說明)
├── .gitignore (可以忽略不上傳的套件)
└── .npmrc
```

    
