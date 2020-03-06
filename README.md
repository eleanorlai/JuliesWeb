# JuliesWeb
-----
## 專案初次設定紀錄
* 安裝Node.js https://nodejs.org/en/download/
    * 測試是否安裝成功
* 使用npm
    1.安裝nodejs會自動安裝npm
    2.套件管理工具，藉由npm去下載其它套件來使用
    > 有兩種scope範圍，也就是套件可以安裝在全域，也可以安裝在特定資料夾
    3.而你也可以把你自己的套件打包好放到NPM上讓其他人下載
    4.搜尋別人寫的package https://www.npmjs.com/package/react
    5.開啟terminal，輸入npm查看相關指令
    6.輸入npm init 並查看package.json
    7.試著安裝一個套件 npm install express --save
    8.有了package.json後輸入npm install 會自動安裝上面所寫出的套件

    ```npm init
    # 已安裝 global gulp，跳過
    sudo npm install --global gulp-cli

    # 安裝 local gulp
    npm install --save-dev gulp

    # 安裝 gulp 外掛
    npm install gulp-clean-css gulp-uglify gulp-concat gulp-rename gulp-sass gulp-load-plugins gulp-autoprefixer gulp-plumber del gulp-rsync gulp-file-include --save-dev```
-----
# 安裝fontawesome
* Create a .npmrc file in the same place as the package.json file. (See FontAwesome guide)
```npm install --save-dev @fortawesome/fontawesome-pro```

-----
# bootstrap 4.4
* https://getbootstrap.com/docs/4.4/getting-started/theming/
```npm install bootstrap --save```
    
