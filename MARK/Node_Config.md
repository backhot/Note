# 环境安装配置：

## 一、node安装
### 1、官网下载安装：http://nodejs.cn/download/

### 2、nvm（版本管理器）
* 第一步：下载安装	`nvm`：https://github.com/coreybutler/nvm-windows/releases
	* 选择nvm的安装目录
	* 选择node.js的安装目录
	* 完毕后查看是否添加环境变量
		1. **nvm -V** 						查看nvm是否安装成功

		1. **nvm install 10.8.0** (版本号)	 安装`nodejs`
		1. **nvm use 10.8.0**  				使用下载的nodejs
		1. **nvm alias default v10.8.0** 	当有多个nodejs版本时，设置默认的node版本
		1. **nvm list**						查看当前所安装的node版本
## 二、npm安装使用

### 1、全局安装：npm install gulp -g

### 2、局部安装：

>npm install gulp -save-dev

* 可以实现多个项目中使用不同版本的包；

* 可以在不使用全局变量NODE_PATH的情况下，进行包的引入；
### 3、cnpm安装 （淘宝镜像，下载速度快，建议）
>npm install -g cnpm --registry=https://registry.npm.taobao.org
* 全局安装：npm install gulp -g 
* 局部安装：npm install gulp --save-dev

* **恢复npm源镜像:**	
	> npm config set registry https://registry.npmjs.org/

* 安装--淘宝镜像源：
	>npm install -g cnpm --registry=https://registry.npm.taobao.org

	>使用--淘宝镜像源：npm config set registry https://registry.npm.taobao.org
* 持久使用（推荐使用）
	> npm config set registry https://registry.npm.taobao.org
## 三、Babel转码器

### 学习环境安装
```js
	// 1、全局安装

	npm install babel-cli -g  				 //将es6代码转换为es5
	npm install babel-node -g  				 //将es6转换es5,且用node执行
	// 2、打开路径，例：

	E:\code\yunkai\nodejs\01\es6

	// 3、项目初始化

	npm init  //一路回车
	
	// 4、项目内下载 ·node· 包

	npm install babel-core --save-dev   			 //为babel-node提供一个可以调用babel接口

	npm install babel-preset-env --save-dev			//项目安装转码规则

	// 5、搭建项目结构

	|	|es6
	|   |node_modules  			//所有项目依赖的包（npm install 的所有文件都在这里）
	|   |src
	|       |--index.js
	|   |dist
	|   |--.babelrc     			//babel的转码配置文件（注意文件名前面有点'.'）
	|   |--package.json  			//npm项目配置文件

	// 6.创建.babelrc文件

{
    "presets": ["env"],    				//转码规则可以设置为env，latest，stage-0
    "plugins": []
}

	// 7.在index.js中书写如下代码
	let name="zhangsan"
	console.log(name)
	
	// 8.测试babel-cli的转码功能

	babel ./src/index.js -o ./dist/index.js  	//文件转码
	babel ./src -d ./dist -s                 /		//项目转义

	node ./dist/index.js						//运行文件node

	// 9.测试babel-node直接运行
	
	babel-node ./src/index.js
```

### 1.全局安装
```js
	npm install babel-cli -g   //将es6代码转换为es5
	npm install babel-node -g  //将es6转换es5,且用node执行
```
### 2.项目安装(可以不用安装)
* npm install --save-dev babel-cli
### 3.转码规则安装
* **npm install --save-dev babel-preset-latest** //最新的
```js
npm install --save-dev babel-preset-es2015  //es6第一个版本

npm install --save-dev babel-preset-stage-0 //es7

npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3

**npm install --save-dev babel-preset-env** //集es2015,es2016,es2017，es2018,es2019和latest规范与一体，
```

### 4.配置文件（对象的形式）

```js
	{
	"presets": ["env"],
	"plugins": []
	}
```
### 5.转码命令

```js
babel 01.js -o _01.js    //文件输出到文件
babel src -d lib -s      //目录输出到目录  -s为生成map文件
```
