# Websocket协议
## 简介

**基于http协议的websocket，实现客户端和服务端的实时通讯，在WebSocket标准没有推出之前，AJAX轮询是一种可行的方案**

* 服务端可以主动向客户端推送信息，

* 客户端也可以主动向服务端发送信息
* 真正的双向平等对话，属于服务器推送技术的一种。

* 相互沟通的Header很小，大概只有2Bytes

## Socket.io模块

### 创建服务
* 基础用法
```js
     var httpServer = require('http').createServer();

      var io = require('socket.io')(httpServer);

      httpServer.listen(3000);
```