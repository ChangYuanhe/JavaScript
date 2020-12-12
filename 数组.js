数组的声明
var arr = new Array(10, true, "wow");
var arr = Array(10, true, "wow");
var arr = [10, true, "wow"];

// 声明长度为10的数组
var arr = new Array(10);
var arr = Array(10);

arr[3]      //第4个数组
arr.length  //数组长度
arr         //数组整体


数组的方法

数组的遍历与遍历
    for循环
    forIn
        // 获得随机数       for in快速循环
        //Math.random 输出[0, 1）中随机一个数
        var num = new Array(10);
        for(var i in num){
            var[i] = parseInt(Math.random*10);
        }

    forEach
        arr.forEach(function(item, index, arr){
            /*
            item当前遍历到的元素
            index当前元素的下标
            arr数组
            */
            console.log(item + "," + index + arr);
        });

    map 
        //映射      有返回值
        arr.map(function(item, index, arr){
            //return为遍历要做的事, 也就是映射关系
            return item * 3;
        });

    filter
        //过滤      有返回值
        arr.filter(function(item, index, arr) {
            //return为过滤的条件
            return item > 20;
        });

    some 
        //查找是否有元素符合条件, 有则返回true 否则false
        arr.some(function(item, index, arr){
            //判断的条件
            return item >20;
        });

    every
        //检查是否所有元素符合条件, 有则返回true 否则false
        arr.every(function(item, index, arr){
            //判断的条件
            return item >20;
        });

    reduce
        //归并
        arr.reduce(function(prev, next, index, arr){
            //prev  第一次为下标为零的数, 然后为上一次遍历return的值
            //next  从下标1开始, 当前遍历到的值
            alert(prev + "," + next);
            return prev + next;
        });


    数组的增减修改
    var time = ["唐", "宋", "元"];

    time.push("明", "清")                           //在数组末尾插入元素, 返回值为插入元素后的数组长度
    time.unshift("夏", "商", "周")                  //在数组头部插入元素, 返回值为插入元素后的数组长度
    time.shift()                                   //去掉数组头部的一个元素, 返回值为去除的元素
    time.pop()                                     //去掉数组尾部的一个元素, 返回值为去除的元素

    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    var newArr = arr1.concat(arr2, "hello", 10);    //合并数组, 原数组不变, 返回值为新生成的数组
    var newArr = arr1.slice(a, b)                   //切取数组中[a, b)的元素形成新数组, 原数组不变, 返回值为新数组
    var newArr = arr1.splice(m, n, 20, "hello")     //切掉从m开始的n个元素替换为20和"hello", n为0时在m前插入,原数组改变, 返回值为新数组

    arr.reverse();                                  //将数组颠倒, 原数组改变, 返回值为新数组
    arr.sort();                                     //将数组当作字符串按照ASCII码排序
    arr.sort(function(value1, value2){              //数组从小到大排序, 改成value2 - value1则为从大到小排序
        return value1 - value2;
    })



    alert(arr1);                                    //输出1, 2, 3
    var str = arr1.join("==");                      //不改变原数组, 拼接为一个新字符串
    alert(str);                                     //输出1==2==3


    arr.indexOf(item, m);                           //从arr[m]开始查找第一次出现item元素的下标, 若未出现则返回值为-1



数组名是一个指针, 用于储存数组的地址
var arr2 = arr1; 修改arr2同样会修改arr1