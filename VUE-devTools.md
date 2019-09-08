

## VUE-devTools : `GIT克隆` --> `NPM install`--> `NPM run build`--> `浏览器开发模式` --> `加载已解压的扩展程序`
## 一、通过 Git 克隆 (VUE-devtools)
>git clone https://github.com/vuejs/vue-devtools.git
## 二、 Git 进入到 vue-devtools 所在目录

```js
npm install
npm run build
```
## 三、修改安装目录vue-devtools\shells\chrome 中 的manifest.json文件。 将persistent 参数改为 true
    ```js
        "persistent":true
    ```
## 四、将扩展程序添加到chrome浏览器
    a. 打开扩展程序后，开启 开发者模式，点击 加载已解压的扩展程序 按钮