# buffer 

## 一、概念
1. 储存原始数据的方法

1. 可转码
1. 全局变量--可全局访问
1. 让nodejs处理二进制

## 二、编码
* 引入模块 
    >let buf = Buffer.alloc()
* 创建类
    >let buf = Buffer.allocUnsafe(size)

    >let buf = Buffer.from() **参数：arrayarrayBuffer；string:返回新buffer实例；buffer：返回新buffer实例**

* `写入`缓冲区
    > buf.write ()
* `读取`缓冲区
    > buf.toString()
* `合并`缓冲区
    > Buffer.concat()
* `拷贝`缓冲区
    > buf.copy（）
* 缓冲区`剪切` 
    > buf.slice()
* 缓冲区`长度 `
    > buf.length()

* buffer 转换为JSON对象
    >buf.toJSON()


# Node.js stream (流)

* Node.js，Stream 有四种 流 类型

    1. Readable - 可读操作。

    1. Writable - 可写操作。

    1. Duplex - 可读可写操作.

    1. Transform - 操作被写入数据，然后读出结果。

## events模块

* 事件触发器
    1. data - 当有数据可读时触发。

    1. end - 没有更多的数据可读时触发。

    1. error - 在接收和写入过程中发生错误时触发。

    1. finish - 所有数据已被写入到底层系统时触发。

## 读取流

```js
    var fs = require("fs");
    var data = '';

    // 创建可读流
    var readerStream = fs.createReadStream('input.txt');

    // 设置编码为 utf8。
    readerStream.setEncoding('UTF8');

    // 处理流事件 --> data, end, and error
    readerStream.on('data', function(chunk) {
    data += chunk;
    });

    readerStream.on('end',function(){
    console.log(data);
    });

    readerStream.on('error', function(err){
    console.log(err.stack);
    });

    console.log("程序执行完毕");
```
## 写入流
```js
    var fs = require("fs");
    var data = '天气很多好 ';

    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');

    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
    console.log("写入完成。");
    });

    writerStream.on('error', function(err){
    console.log(err.stack);
    });

    console.log("程序执行完毕");

```
## 管道流

```js
  var fs = require("fs");

  // 创建一个可读流
  var readerStream = fs.createReadStream('input.txt');

  // 创建一个可写流
  var writerStream = fs.createWriteStream('output.txt');

  // 管道读写操作
  // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
  readerStream.pipe(writerStream);
  console.log("程序执行完毕");
```

## Node.js stream 接口

* 首先引入 `fs` 模块

* 读取流
    > fs.createReadStream('./txt)
* 写入流
    > fs.createwriteStream('./txt)
* 读写流
    > fs.createReadStream('./txt).`pipe`.(fs.createwriteStream('./txt))

# path  路径操作

## `__dirname`：*返回当前路径*
## path.`basename`(path,[ext])：    *返回path路径最后一部分*

## path.`dirname`(path,[ext])：   *返回path路径目录*

## path.`extname`(path,[ext]) ：  *返回 path 的扩展名*

## path.`format`(pathObject)：  *从一个对象返回一个路径字符串*与path.parse()相反。

## path.parse(path):    *返回一个对象，对象的属性表示 path 的元素*
```js
    let par = path.parse(__dirname)
    //打印 par 的结果 
    { 
        root: 'D:\\',
        dir: 'D:\\CODE\\Nodejs',
        base: '08buffer',
        ext: '',
        name: '08buffer' 
    }
  ```
## **path.join([...paths])**:   *使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径*

## path.relative(from, to):     *把一个路径或路径片段的序列解析为一个绝对路径。给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径。*



# 文件编码

## Bom的移除
* BOM，全称是Byte OrderMark

* 删除Bom:
```js
    var fs = require('fs');
    var path = require("path")
    // var paths = path.join(__dirname, "/dir/file.txt");
    var paths = path.join(__dirname, "/dir");
    console.log(paths)

    function readDirectory(dirPath) {
    console.log(fs.statSync(dirPath))
    fs.stat(dirPath, (err, stats) => {
        if (err) {
            console.log('Not Found Path : ', dirPath)
            return
        } else if (stats.isFile()) {
            var buff = fs.readFileSync(dirPath);

            if (buff.length >= 3 && buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
                //EF BB BF 239 187 191
                console.log('\发现BOM文件：', dirPath, "\n");

                // buff = buff.slice(3);
                fs.writeFile(dirPath, buff.toString(), "utf8");
            } else {
                console.log("未发现bom文件")
            }
        } else if (stats.isDirectory()) {
            var files = fs.readdirSync(dirPath);

            files.forEach(function(file) {
                var filePath = dirPath + "/" + file;
                let stat = fs.statSync(filePath);
                if (stat.isDirectory()) {
                    readDirectory(filePath)
                } else {
                    var buff = fs.readFileSync(filePath);

                    if (buff.length >= 3 && buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
                        //EF BB BF 239 187 191
                        console.log('\发现BOM文件：', filePath, "\n");

                        // buff = buff.slice(3);
                        fs.writeFile(filePath, buff.toString(), "utf8");
                    } else {
                        console.log("未发现bom文件")
                    }
                }
            })
        }
    })
    }
    readDirectory(paths);
```


## iconv-lite (工具) 进行文件的编码转换

* 好用的中文转码
```
    npm install --save-dev iconv-lite
```

# HTTP模块

## HTTP协议

### 一、通讯协议

#### OSI网络七层协议、规范

1. **应用层**：客户端的实际的应用通信服务，文件传输服务，文件服务，电子邮件服务SMTP,
    * telnet,HTTP,FTP,NFS,SMTP 

1. **表示层**：用定义数据格式和加密
    * 加密，ASCII
1. **会话层**：维持连接 （定义如何开始、控制和结束一个会话）
    * RPC，SQL

1. **传输层**： 对应用层，提供处于网络连接中的两台计算机之间的数据传输， 提供端对端的接口。当发送的数据量较大时，网络会发生多次中断，只是中断的时间是毫秒级的。如果发生中断丢包时，服务端会重新发送丢失的数据包，这样就会保证发送数据的完整性。
    * rpc,sql

1. **网络层**：规定数据怎样的方式传输到另一台电脑，
    * IP,IPX

1. **数据链路层**：定义如何 让格式化的数据传输，控制物理介质的访问，提供错误检测和纠正

1. **物理层**：规范是有关传输介质的特性
    * Rj45,802.x

### 二、TCP/IP协议

* 建立起一个TCP连接需要经过“三次握手
    
    1. 第一次握手：由客户端发起请求，向服务端发送一个包，等待服务器确认
    
    1. 第二次握手：服务端收到请求并确认后，向客户端发送一个包,此时服务器进入接收状态
    
    1. 第三次握手：客户端收到服务端的包后，再向服务端发送一个确认包，客户端和服务端进入连接状态，完成三次握手。

### 三、HTTP协议

### http请求

1. **状态行**：请求方式(Method),资源路径(URL)，协议版本(Version)

1. **请求头**：访问的域名、用户代理、cookie信息

1. **请求正文**：HTTP请求的数据 

* 扩展：
    * ajax请求状态码
        * 0 ：（初始化）还没有调用open()方法
        * 1 ：（载入）已调用send()方法，正在改善请求
        * 2 ：（载入完成）send()完成，已收到全部响应内容
        * 3 ：（正在解析...）
        * 4 ：（完成请求）响应内容解析完成，可以在客户端调用

* http请求状态

    * *以下数字开头的信息*
    * 1 ：消息
    * 2 ：成功 200
    * 3 ：重定向
    * 4 ：请求错误
    * 5 : 服务器错误

* 常见状态码的含义
    * 200---OK/请求已经正常处理完毕
    * 301---/请求永久重定向
    * 302---/请求临时重定向
    * 304---/请求被重定向到客户端本地缓存
    * 400---/客户端请求存在语法错误
    * 401---/客户端请求没有经过授权
    * 403---/客户端的请求被服务器拒绝，一般为客户端没有访问权限
    * 404---/客户端请求的URL在服务端不存在
    * 500---/服务端永久错误
    * 503---/服务端发生临时错误

### 四、HTTP协议版本更替


## http模块客户端请求 API

### **`http.request`(options,[callback])： 请求接口，响应数据， 返回一个request对象**

```js
    var server=http.createServer(function(request, response) {`CODE.... ` })
```

* **参数：**

    * protocol ()

    * family ()

    * host ()
    * port (number)
    * localAddress ()
    * socketPath()
    * method 
    * path 
    * headers (obj)
    * auth 
    * agent 



## http创建服务端

### **http.`createServer`([options][, requestListener])创建服务**

* server的API详解:

    * **server.close()**

    * **server.listen()**

    * **server.maxHeadersCount**:

### http服务端的request参数详解

* requestHeader[accept-Encoding:gzip,deflate] 检测浏览器是否支持压缩


## URL模块

## querystring.parse()

## querystring.stringify()

