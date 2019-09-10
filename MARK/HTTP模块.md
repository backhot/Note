# http 模块客户端请求API

## protocol (string):协议
## host(string) :请求发送 至服务端的域名或IP地址，默认localhost `hostname 优先于 host。`

## family   (number):解析时使用的IP地址簇

## port(number) :远程服务器的端口，默认为80

## localAddress (string) ：为网络连接绑定的本地接口

## socketPath(string)
##  method(string)
## path

## headers({}) :包含请求头的对象

## createConnection

## timeout

# HTTP创建服务端

## http.createServer()

## server.close()

## server.listen() 

## **http服务端的request参数详解**

### request.httpVdrsion

### request.headers
### request.method
### request.url

## **http服务端的response参数详解**

### response.end（）
### response.getHeader(name) ：尚未发送到客户端的响应头
### response.getHeaders()：获取所有
### response.hasHeader(name): 检查有没有‘name’,ture或false
