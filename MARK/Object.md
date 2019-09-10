# 对象

## Object.`is`()

## Object.`assign`()

* *将源对象（source）的所有可枚举属性，复制到目标对象（target）*


# 属性的可枚举性 *enumerable*

## Object.`getOwnPropertyDescriptor`方法 
* *可以获取该属性的描述对象*

## Object.`keys`()：
* *返回对象自身的所有可枚举的属性的键名*

## JSON.`stringify`()：
* *只串行化对象自身的可枚举的属性*

# 属性的遍历器

## （1）`for...in`
* *遍历对象`自身`的和`继承`的`可枚举属性`（不含 Symbol 属性）*

## （2）Object.`keys`(obj)、Object.`values`(obj)、Object.`entries`(obj)

* *一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）*

## （3）Object.`getOwnPropertyNames`(obj)

* *返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。*

## （4）Object.`getOwnPropertySymbols`(obj)

* *返回一个数组，包含对象自身的所有 Symbol 属性*

## （5）Reflect . ownKeys(obj)  

*(牛人登场，dang!dang!dang!dang!)*
* Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是Symbol或字符串，也不管是否可枚举

> 以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

1. 首先遍历所有属性名为数值的属性，按照数字排序。

1. 其次遍历所有属性名为字符串的属性，按照生成时间排序。

1. 最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。

# 对象的原型

## Object.`set`PrototypeOf() （写操作）
## Object.`get`PrototypeOf() （读操作）
## Object.`create`()    （生成操作）代替

# 对象的遍历方法
## Object.`keys`(obj)
* 遍历键名

## Object.`values`(obj)
* 遍历属性的键值

## Object.`entries`(obj)
* 遍历键名值对

> *注：三个方法都遵循以下规则：

1. 过滤属性名为 Symbol 值的属性，不包含Symbol的属性值；

1. 字符串会先转成一个类似数组的对象；

1. 数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组

# 对象的扩展运算符

## 解构赋值
* `=` 右边是undefined或null，就会`报错`
* …解构赋值必须是最后一个参数，否则会`报错`。
* 解构赋值的拷贝是浅拷贝
* 不会拷贝继承自原型对象的属性

## 扩展运算符
* 相当于Object.assign方法
* 扩展运算符的参数是null或undefined，这两个值会被忽略，不会报错
* Object.assign()无法正确拷贝get属性和set属性的问题

## Object.getOwnPropertyDescriptor
* 返回指定对象所有自身属性（非继承属性）的描述对象
* Object.assign()无法正确拷贝get属性和set属性的问题 
>`Object.getOwnPropertyDescriptor` 配合`Object.defineProperties`方法,可以实现正确拷贝。

# Symbol
## 概述
```js
let s = Symbol();
typeof s    // "symbol"
```
* 原始数据类型Symbol
* 表示独一无二的值
* Symbol函数前不能使用new命令，否则会报错
* 相同参数的Symbol函数的返回值是不相等的。

## 作为属性名的Symbol
* 不允许用点操作符；

## 消除魔术字符串；（解决强耦合）

* shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可

## （Symbol）属性名的遍历

### `Object.getOwnPropertySymbols(obj)` *返回symols的数组*
* 该属性不会出现在 `for...in`、`for...of` 循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回

> * **最牛API登场！！！**
* `Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

## Symbol.for()、Symbol.keyFor()
* `Symbol.for()`接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。会被登记在全局环境中供搜索

# Set和Map数据结构
## set 
### *Set本身是一个构造函数，用来生成 Set 数据结构。*
### 基本用法
* (1)类似于数组，但是成员的值都是唯一的，没有重复的值。
* (2) Set 结构不会添加重复的值
* (3)可以接受一个数组（或类似数组的对象（arguments））作为参数，用来初始化，其他类型报错
* (4)扩展运算符…可以将其变成一个数组；
* (5) 向Set加入值的时候，不会发生类型转换; 内部判断两个值是否不同,类似于精确相等运算符（`===`），主要的区别是`NaN等于自身`
* (6) 两个对象总是不相等的；内存地址不一样；
* (7) Array.from方法可以将 Set 结构转为数组。

### （1）Set实例的属性和方法：
#### 1. Set.prototype.constructor：构造函数，默认就是Set函数。
#### 2. Set.prototype.size：返回Set实例的成员总数


#### `add(value)`：    添加某个值，返回Set结构本身。

#### `delete(value)`： 删除某个值，返回一个布尔值，表示删除是否成功。

#### `has(value)`： 返回一个布尔值，表示该值是否为Set的成员。

#### `clear()`：清除所有成员，没有返回值。

### (2) 遍历方法：

* keys()：返回键名的遍历器（无键名，此方法和values（）类似）

* values()：返回键值的遍历器

* entries()：返回键值对的遍历器

* forEach()：使用回调函数遍历每个成员，处理函数参数依次为键值、键名、集合本身；第二个参数，表示绑定的this对象。