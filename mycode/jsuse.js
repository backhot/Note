// 数组去重：

//  一、双重循环：
// 1、有相同的值则跳过，不相同则push进数组，取重复数据的最后一个位（性能高点）
// 2、值相同时，则删去这个值，数组长度减1,splice直接在原数组进行操作,简单易懂,占用内存高，速度慢

// 二、单次循环：
// 1、利用对象属性的不可重复性，push新数组
// 2、利用indexof或includes进行新数组中查找，找到忽略，找不到添加；返回新数组；

// 三、递归去重：先排序，然后从后向前进行比较

// 四：es6去重：通过set方法




// js常用排序方法：
// 1、冒泡排序：
// 2、插入排序：
// 3、选择排序：
// 4、希尔排序：
// 5、归并排序：
// 6、快速排序：
// 7、堆排序：
// 8、计数排序：
// 9、桶排序：



// 冒泡排序：

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 48, 2, 46, 4, 19, 50, 4];

// Array.prototype.sorts = function() {　
//     let data = this
//     let len = data.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - i; j++) {
//             if (data[j] > data[j + 1]) {
//                 let item = data[j]
//                 data[j] = data[j + 1]
//                 data[j + 1] = item
//             }
//         }
//     }
//     return data
// }
// console.log(arr.sorts())

// 快速排序

// Array.prototype.sorts = function() {　
//     let data = this

//     function everySort(arr) {
//         if (arr.length <= 1) {
//             return arr
//         } else {
//             let len = arr.length
//             let mid = Math.floor(len / 2)
//             var left = [],
//                 right = []

//             for (let i = 0; i < len; i++) {
//                 if (i != mid) {
//                     if (arr[i] < arr[mid]) {
//                         left.push(arr[i])
//                     } else {
//                         right.push(arr[i])
//                     }
//                 }
//             }
//             return everySort(left).concat(arr[mid], everySort(right))
//         }

//     }

//     return everySort(data)
// }
// console.log(arr.sorts())

// 选择排序


// Array.prototype.sorts = function() {　
//     let data = this
//     let item
//     for (let i = 0; i < data.length; i++) {
//         for (let j = i; j < data.length; j++) {
//             if (data[j] < data[i]) {
//                 item = data[i]
//                 data[i] = data[j]
//                 data[j] = item
//             }
//         }
//     }

//     return data
// }
// console.log(arr.sorts())


// 插入排序



Array.prototype.sorts = function () {
    let data = this
    let item
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[j] < data[i]) {
                item = data[i]
                data[i] = data[j]
                data[j] = item
            }
        }
    }

    return data
}











// 数组去重:
var arr = [1, 4, 2, 3, 4, 4, 4, 5, 2, 2, 3, 5]

// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     for (let i = 0; i < data.length; i++) {
//         for (let j = i + 1; j < data.length; j++) {
//             if (data[i] == data[j]) {
//                 j = ++i
//             }
//         }
//         result.push(data[i])
//     }
//     return result
// }

// console.log(arr.filters())



// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     let len = data.length
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (data[i] == data[j]) {
//                 data.splice(i, 1)
//                 len--
//                 i--
//             }
//         }
//     }
//     return data
// }

// console.log(arr.filters())


// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     let len = data.length
//     for (let i = 0; i < len; i++) {
//         if (!result.includes(data[i])) {
//             result.push(data[i])
//         }
//     }
//     return result
// }

// console.log(arr.filters())


// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     let len = data.length
//     for (let i = 0; i < len; i++) {
//         if (!result.includes(data[i])) {
//             result.push(data[i])
//         }
//     }
//     return result
// }

// console.log(arr.filters())


// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     let obj = {}
//     let len = data.length
//     for (let i = 0; i < len; i++) {
//         if (!obj[data[i]]) {
//             obj[data[i]] = 1
//             result.push(data[i])
//         }
//     }
//     return result
// }

// console.log(arr.filters())


// Array.prototype.filters = function() {
//     let data = this
//     let result = []
//     let obj = {}
//     let len = data.length
//     data.sort((a, b) => {
//         return a - b
//     })

//     function everyHandle(index) {
//         if (index >= 0) {
//             if (data[index] == data[index - 1]) {
//                 everyHandle(index - 1)
//             } else {
//                 everyHandle(index - 1)
//                 result.push(data[index])
//             }
//         }
//     }
//     everyHandle(len - 1)
//     return result
// }

// console.log(arr.filters())

// Array.prototype.filters = function() {
//     var data = this
//     return [...new Set(data)]
// }

// console.log(arr.filters())




// 扁平化数组
var arr = [1, [2, 3],
    [4, [5, 6, [7, 8]]]
]

//demo1:
// var newarr = []
// let fn = function(arr) {
//     console.log(arr.constructor === Array)
//     if (arr.constructor == Array) {
//         for (let i = 0; i < arr.length; i++) {
//             fn(arr[i])
//         }
//     } else {
//         newarr.push(arr)
//     }
// }
// fn(arr)
// console.log(newarr)

//demo2:
// var array = [1, [2, [3, 4], 5], 6];
// function flatten(array) {
//     return array.reduce(function (arr, item) {
//         return (Object.prototype.toString.call(item) === '[object Array]'
//             ? Array.prototype.push.apply(arr, flatten(item)): arr.push(item), arr);
//         }, []);
// }
// console.log(flatten(array));




// 扁平化对象
// var obj = {
//     name: 1,
//     obj: {
//         age: 2,
//         addr: {
//             page: "bejing"
//         }
//     }
// }

// function go(obj) {
//     let newObj = {}

//     function every(item) {
//         if (item.constructor == Object) {
//             Object.keys(item).forEach((i) => {
//                 if (item[i].constructor == Object) {
//                     every(item[i])
//                 } else {
//                     newObj[i] = item[i]
//                 }
//             })
//         }
//     }
//     every(obj)
//     return newObj
// }
// console.log(go(obj))




//深拷贝一个数组

// var arr = [1, [2, 3],
//     [4, [5, [6, 7]]]
// ]

// function copyArr(data) {
//     let everyArr = []
//     data.forEach(i => {
//         if (i.constructor == Array) {
//             everyArr.push(copyArr(i))
//         } else {
//             everyArr.push(i)
//         }
//     });
//     return everyArr
// }

// console.log(copyArr(arr))


// 深拷贝一个对象
// var obj = {
//     name: 1,
//     obj: {
//         age: 2,
//         addr: {
//             page: "bejing"
//         }
//     }
// }

// function copyObj(item) {
//     let obj = {}
//     Object.keys(item).forEach((i) => {
//         if (item[i].constructor == Object) {
//             obj[i] = copyObj(item[i])
//         } else {
//             obj[i] = item[i]
//         }
//     })
//     return obj
// }

// console.log(copyObj(obj))


/**
 * Created by guang on 2016/7/25.
 */
// Array.prototype.contains = function(obj) {
//     var i = this.length;
//     while (i--) {
//         if (this[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }
// alert([1, 2, 3].contains(2)); // => true