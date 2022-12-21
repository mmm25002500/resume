# 履歷表
一個開源的履歷表，透過使用者設定，可以直接使用。

## 目錄
1. [履歷表](#履歷表)
2. [目錄](#目錄)
3. [TODO](#todo)
4. [安裝套件](#安裝套件)
   1. [NPM](#npm)
   2. [YARN](#yarn)
5. [熱更新](#熱更新)
   1. [NPM](#npm-1)
   2. [YARN](#yarn-1)
6. [設定檔](#設定檔)
   1. [網站設定](#網站設定)
   2. [語言設定](#語言設定)
7. [編譯](#編譯)
   1. [NPM](#npm-2)
   2. [YARN](#yarn-2)

## TODO
- [ ] 寫 Markdown
- [x] 套 Tailwind
- [x] 建立 Vue Cli + Vite

## 安裝套件
所需要的軟體:
| 套件名稱 | 版本 |
| ------ | ------|
| Node.JS | v16以上 |
| git | |

### NPM
```bash
npm install
```
### YARN
```bash
yarn install
```
## 熱更新
### NPM
```bash
npm dev
```
### YARN
```bash
yarn dev
```

## 設定檔
### 網站設定

| 位置 | 描述 |
| ---- | ---- |
| @/config/SITECFG.json | 存放網站設定 |
| @/config/changeLog.json | 存放網站更新日誌 |

### 語言設定
在 ```@/i18n/lang_Country.json``` 當中，可以進行新增語言。

## 編譯
### NPM
```bash
npm build
```
### YARN
```bash
yarn build
```

## 開發者
[夏特稀](https://github.com/mmm25002500)