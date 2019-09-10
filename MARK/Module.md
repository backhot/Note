# Moudle
## module模块安装 

```
npm install --save node-hook
```
## ES6模块

> ES6 模块的设计思想是尽量的静态化使得编译时就能确定模块的依赖关系，以及输入和输出的变量

* ES6 模块不是对象，而是通过`export`命令显式指定输出的代码，再通过`import`命令输入。

## CommonJS模块

>CommonJS只能在运行时确定这些东西

* CommonJS 模块就是对象，输入时必须查找对象属性