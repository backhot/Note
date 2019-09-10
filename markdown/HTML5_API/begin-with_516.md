## 1.JS运行机制

## **window.requestAnmimationFrame()**

## 移动端事件

## 前端存储

## 拖放

## 插件自封装 

### 插件扩展 `闭包方式`
    |--插件扩展
        |--移动端
            |--双击
            |--单击
            |--不同方向划动 (上 下 左 右)
            |--显示 隐藏
            |-- ...
    
* 模块化开发

## 地理定位 

## video & audio

## **swiper**

## better-scroll

    threshold : 10 //   向上滑动的阈值，临界值为：0,值越大，离顶部越远的距离触发
    threshold :-10 //   向上滑动的阈值， 值越小，离底部越远的距离触发

## svg

## Canvers 

```html {.line-numbers}

```
*  HTML5新增，可用于通过使用JavaScript中的脚本来绘制图  
    

* **必须**
    1. var **canvas** = document.getElementById('canvas'); //获取DOM节点
    1. var ctx = `canvas`.getContext('2d');             // 将些节点设置为**2d画布**



*  var ctx.fillStyle = "red" 
* 正常填充
    * ctx.**fillStyle** = "red" 
    * ctx.**filrect**（100，100，100，100）
* 渐变填充
    * 线性
    * 径向
    
* 描边
* 阴影
* 画线
* 矩形
* 路径
* 弧度制 和 角度制
    * **角度制**
    * 360度 = 2 * Math.PI
    * 1度 = Math.PI / 180
    * **弧度制**
    * 1度 = 180 / Math.PI
deal