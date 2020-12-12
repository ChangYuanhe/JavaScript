/*
输出
alert();            通过警示框输出
document.write();   直接在页面上输出, 可以使用html的标签
console.log();      在控制台中输出

用户命名的量都叫做标识符
常量
    基本数据类型
        1.数字              number       包括整型和浮点型         -Infinite
        2.字符串            所有带单引号或者双引号的都是字符串     "100" 'c'
        3.布尔值            boolean       true false

    引用数据类型
        1.数组              数组名是一个指针, 用于储存数组的地址 所以var arr2 = arr1; 修改arr2同样会修改arr1
        2.对象              object
        3.正则表达式        /abc/i 类似字符串       可加修饰符:  i忽略大小写  g全局匹配

    特殊数据类型
        1.null              空值
        2.undefined         未初始化的变量的值, 不同于null
        3.NaN (Not a Number)

变量        弱引用类型
声明变量 
    var num = 100;
    var num;(等于var num = undefined;)
    var num = null;
    typeof查看数据类型

声明提升 
    在当前作用域, 声明变量和声明函数会自动提升到定义域的最前端执行
    alert(a);       会输出undefined而非报错
    var a = 1;


.toFixed(2)     保留小数函数
*/