# querystring模块

## querystring.escape(str) ：

* **对给定的 str 进行 URL 编码，一般是将querystring.stringify()生成的字符串进行编码**

## querystring.parse(str[, sep[, eq[, options]]])：

* **方法会把一个 URL 查询字符串 str 解析成一个键值对的集合。sep `<string> `用于界定查询字符串中的键值对的子字符串。默认为 '&'。eq` <string>` 用于界定查询字符串中的键与值的子字符串。默认为 '='。**

## querystring.stringify(obj[, sep[, eq[, options]]]) ：
* **该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串，参数跟parse一样，是parse的逆方法**

## querystring.unescape(str) 

* **通过给 querystring.unescape 赋值一个函数来重写解码的实现，默认使用 JavaScript 内置的 decodeURIComponent() 方法来解码，跟escape是逆方法**

