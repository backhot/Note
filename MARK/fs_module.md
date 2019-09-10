
# fs模块
* 1、文件夹操作
>fs.`mkdir`() 创建

>fs.`readdir`() 读取

>fs.`rmdir`() 删除 *只删空 *

>fs.realpath(path[, mode], callback) 返回一个真实的绝对路径 `utf-8`

* 文件 & 文件夹 --> 共用
>fs.`rename` 重命名

>fs.`stat`  检测是否存在

>fs.`watch` 监听

>stats.isFile()  判断文件

>stats.directory() 判断文件夹

* 文件操作

>fs.`appendFile` 追加数据 

> fs.`copyFile` 复制文件

>fs.`unlink`(path, callback) 删除文件

>fs.`truncate` 截取文件数据 

>fs.`watchFile`  监听文件改动



## 一、文件描述符相关操作

### 参数
1. buffer 是数据将被写入到的 buffer。

1. offset 是 buffer 中开始写入的偏移量。

1. length 是一个整数，指定要读取的字节数。

1. position 指定从文件中开始读取的位置。 如果 position 为 null，则数据从当前文件读取位置开始读取，且文件读取位置会被更新。 如果 position 为一个整数，则文件读取位置保持不变。

1. 回调有三个参数 (err, bytesRead, buffer)。
### 指令
1. 从 fd 指定的文件中读取数据
```js
    fs.read(fd, buffer, offset, length, position, callback)
```
2. 从 fd 指定的文件中写入`buffer`数据
```js
    fs.write(fd, buffer, offset, length, position, callback)
```
3. 从 fd 指定的文件中写入`string `数据
```js
   fs.write(fd, string[, position[, encoding]], callback)
```


## 二、文件夹操作

### 1.  创建文件夹
> fs.`mkdir`()   
### 2.  读取文件夹内容
> fs.`readdir`()
### 3.  删除文件夹
>fs.`rmdir`() 
* **注：只能删除空文件夹**

## 三、文件和文件夹共用操作

### 1.    文件夹或文件重命名
>fs.`rename`(oldPath, newPath, callback)

### 2.检测文件或文件夹是否`存在`
>fs.`stat`(path[, options], callback)
*  回调函数中包含两个参数 (err, stats) ，其中 stats 为 fs.Stats对象。

### 3. 指定的文件或目录的用户权限
>fs.`access`(path[, mode], callback)
    * 如果不需要操作文件只是想获取文件是否可用，推荐使用，功能和fs.stat类似
    * 如果可访问性检查失败，则callback参数会是一个  ` Error `   对象

### 4.文件或文件夹的监听
>fs.`watch`(filename[, options][, listener])

### 5.真实的绝对路径
> fs.`realpath`(path[options],callback)

*   一般用同步方式
*   返回一个真实的绝对路径
* option为`utf-8`

### **注意，在大多数平台，当一个文件出现或消失在一个目录里时，'rename' 会被触发**

## 四、文件相关操作

1. 追加数据到一个文件
    >fs.`appendFile`(path, data[, options], callback)

    * 异步地追加数据到一个文件，如果文件不存在则创建文件

    * data 可以是一个字符串或 Buffer
    * 如果 options 是一个字符串，则它指定了字符编码。

1. 异步的将 src 拷贝到 dest

    > fs.`copyFile`(src, dest[, flags], callback)
    * 如果 dest 已经存在会被覆盖。回调函数没有给出除了异常以外的参数。
    * Node.js不能保证拷贝操作的原子性。如果目标文件打开后出现错误，Node.js将尝试删除它。

1. 将一个源文件中的内容复制一份放到新的文件中去
    >fs.`link`(existingPath, newPath, callback)

    * existingPath：源文件地址，文件必须存在

    * newPath：硬链接的存储位置
    * callback：完成后的回调
1. 获取文件信息
    >fs.`lstat`(path, callback)和fs.fstat(path,callback)
    * 获取到的是fs.Stats 对象
1. 读取文件内容
    >fs.readFile(path[, options],callback)option
1. 截取文件
    >fs.truncate(path[, len],callback)
    * 如果文件描述符指向的文件大于 len 个字节，则只有前面 len 个字节会保留在文件中

    * 如果前面的文件小于 len 个字节，则扩展文件，且扩展的部分用空字节（'\0'）填充
1. 删除文件
    >fs.unlink(path, callback)

### buffer 内存区域
### flags 用户权限级别

*  