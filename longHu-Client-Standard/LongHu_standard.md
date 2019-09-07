
# HTML standard
## 1、基础规范
1. 为每个HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。(Line1)
1. html根元素指定lang属性，从而为文档设置正确的语言。(Line2)
1. 声明文档的编码charset，且与文件本身编码保持一致，推荐使用UTF-8编码。根据页面内容和需求填写适当的keywords和description。(Line4)
1. 每个页面必须有且仅有一个title元素。(Line5)
1. 当link元素用于引用CSS文档时, 默认media是screen, 如为特殊终端提供样式, 请指定media属性, 如media=“print”。
1. css 引用置于头部标签内。
1. js 引用置于底部标签前。
## 2、属性顺序 
1. v-if、v-else 第三方框架指令相关的属性放在最前
1. class （class是为高可复用组件设计的，所以应处在第二位）
1. id、name （id更加具体且应该尽量少使用，所以将它放在第三位）
1. data-1.
1. src、for、type、href、value
1. placeholder、title、alt
1. aria-1.、role
1. required、readonly、 disabled
# CSS规范
## id/class命名规则
1. 遵循“内容优先，表现为辅”的基本原则
首先根据内容命名，如header、footer。若根据内容无法找到合适的命名，再结合表现进行辅助，如col-main、blue-box。
1. 一律小写，多个单词以“-”连接
不能使用下划线和驼峰命名法，如main-nav。可基于最近的父元素名称作为前缀。
1. 在不影响语义的情况下，可适当使用缩写
缩写只用来表示结构，如col、nav、btn等，不可自造缩写。
1. 避免广告拦截词汇
ad、ads、adv、banner、sponsor、gg、guangg、guanggao等，页面中尽量避免采用以上词汇来命名
1. 选择器
如无必要，不得为 id、class 选择器添加类型选择器进行限定，在性能和维护性上，都有一定的影响。


1. 属性顺序
1. 位置属性(position、top、right、z-index、display、float等)；
1. 大小(width, height, padding, margin等)；
1. 文字系列(font、line-height、letter-spacing、color、text-align等)；
1. 背景(background、border等)；
1. 其他(animation、transition等)。

# JS规范
### 一、 文件命名
* 文件夹 和文件名的命名应该代表 `代码功能`，与后端一致为佳
### 二、语言规范
1. 声明优先级 let > const> var 
1. 分号强制不使用分号，尊崇eslint的推荐规范
1. 不在块内声明函数 
1. 闭包
1. `this`:仅在对象构造器, 方法, 闭包中使用.
1. for-in 循环
 * 最好只用于 object/map/hash 的遍历
```js
// 闭包
function foo(element, a, b) {
  element.onclick = function() { /* uses a and b */ };
} // element, a, b 不能被GC回收

// 将代码重构为 如下 ：
function foo(element, a, b) {
  element.onclick = bar(a, b);
}

function bar(a, b) {
  return function() { /* uses a and b */ }
}
```
### 三 、编码风格
1.  明确作用域
任何时候都要明确作用域 – 提高可移植性和清晰度. 例如, 不要依赖于作用域链中的 window 对象.
可能在其他应用中, 你函数中的 window 不是指之前的那个窗口对象。

1.  代码格式化
数组和对象的初始化,如果初始值不是很长, 就保持写在单行上:
1.  引号的使用
单引号 (‘) 优于双引号 (“).
当你创建一个包含 HTML 代码的字符串时就知道它的好处了。
1.  过长的单行予以换行
换行应选择在操作符和标点符号之后。
1.  用数组和对象字面量来代替数组和对象构造器
1. 循环的使用,**在循环中，尽量使用变量先获取到相关数值，在放入循环中进行判断，否则非常影响性能**
1. 注释
1. 函数注释
 * ```js
    /**
    *简述
    *
    * 功能详细描述
    *
    * @param <String> arg1 参数1
    * @param <Number> arg2 参数2，默认为0
    * @return <Boolean> 判断xxx是否成功
    */
    function fooFunction (arg1, arg2) {
        // code
    }
    ```
9. 语句注释
单行注释：
* 单独一行：//(双斜线)与注释文字之间保留一个空格；

* 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格；

* //(双斜线)与代码之间保留一个空格。

    * **`//` 调用了一个函数；**
    * 1. **单独在一行**
    ```js
    setTitle(); var maxCount = 10;   // 设置最大量；
  
    ```
    * 2. **在代码后面注释**
    ```js
    setName(); 
    ``` 
    * 3. **注释代码**

# Vue规范
## 1. Vue属性书写顺序
```js
export default {
  mixins,
  data,
  props,
  store，
  computed，
  route,
  created，
  ready，    // => 生命周期顺序不赘述
  event,
  watch,
  components,
  methods
}
```
## 2. 组件
>2.1组件以驼峰命名

>2.2 Vue组件的书写顺序
```js

<template>
  <my-components></my-components>
</template>
<script>
  import myComponents from './myComponents.vue'

  export default {
  components: {
      myComponents
    }
  }
</script>
```
>2.3 Vue组件的书写顺序
```js
    <template>
    <my-components></my-components>
    </template>
    <script>
    import myComponents from './myComponents.vue'

    export default {
    components: {
        myComponents
        }
    }
    </script>
```
## 3. 事件
```html
    <!-- 不建议 -->
    <a v-on:click="pass()">pass</a>

    <!-- 推荐 -->
    <a @click="pass">pass</a>
```

## 4. 请求
* 不论什么情况 ajax请求不允许直接写到页面和业务代码中 请在项目根目录中单独新建一个api文件夹 按页面/模块 来存放所有的请求 便于统一管理

## 5. VUEX
* 5.1 对于`小型项目vuex`各部分划分如下： state、mutation、action、getter 不做详细划分 写成单文件
    ```
        store
        ├── index.js          # 包含所有的state 组装模块并导出 store 的地方 
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        └── getters.js        # 根级别的 getter
    ```
* 5.2对于`中大型项目vuex`各部分划分： 除去全局的页面状态。各子模块拥有自己的state、mutation、action、getter 配置到单独的modules子模块中
    ``` 
    store
        ├── index.js          # 包含根的 state 组装模块并导出 store 的地方
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        ├── getters.js        # 根级别的 getter
        └── modules
                ├── cart.js       # 子模块
                ├── products.js   # 子模块
                ├── account		  # 用户子模块文件夹(如果某模块复杂到一定程度  可以划分的更详细) 
                │		   ├── index.js		    # 包含模块级别的 state 组装并导出模块
                │		   ├── actions.js        # 模块级别的 action
                │		   ├── mutations.js      # 模块级别的 mutation
                │		   └── getters.js        # 模块级别的 getters
                └── index.js		 # 组装子模块并导出给上一层的index.js
    ```            