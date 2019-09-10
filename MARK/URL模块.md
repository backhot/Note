# url模块

## 用来操作地址的模块

### newURL() 实例方法

* 以下为获取或设置属性
    * url.hash

    * url.host  不含端口
    * url.hostname 含端口
    * url.href
    * url.pathname
    * url.port
    * url.protocol
    * url.serarch  
    * url.parse() 返回url对象

* urlObject相应的属性有

    * urlObject.hash

    * urlObject.host	
    * urlObject.hostname	
    * urlObject.href
    * urlObject.pathquery=string'
    * urlObject.pathname	
    * urlObject.port	
    * urlObject.protocol	
    * urlObject.query	query： 属性是不含开头 ASCII问号（?）的查询字符串，或一个被 querystring 模块的 parse() 方法返回的对象。 query 属性是一个字符串还是一个对象是由传入 url.parse() 的 parseQueryString 参数决定的
    * urlObject.search：	search 属性包含 URL 的整个查询字符串部分，包括开头的ASCII 问号字符

### url.resolve(from, to)