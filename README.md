# gh-pages.vue

## 创建一个项目
```sh
npm init vue
```
## 安装"gh-pages"
```sh
npm i gh-pages -D
```
## 初始化仓库，提交到公共仓后，登录Github，进入项目，选择Code，复制该项目链接，链接方式SSH或者HTTPS都可以
## 在“package.json”的“scripts”中添加两个脚本
```javascript
"predeploy":"npm run build",
"deploy":"gh-pages -d dist -r https://github.com/[username]/[project].git -b gh-pages"
```
需要将-r 后面的链接地址改为你的项目的地址。
-b是切换分支，gh-pages是静态页面分支的名字，叫什么都可以。
## 在终端中运行命令,目录中出现“dist”文件夹同时终端出现“Published”，则发布成功,即可打开页面。
```sh
npm run deploy
```
## 如果发布上去的页面打开时空白，则需要在vue.config.js里加上如下配置，再运行下
```javascript
publicPath:'.'
```
```sh
npm run deploy
```

### 参考
[代罔](https://juejin.cn/post/7081150936445354014)
