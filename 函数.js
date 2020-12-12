/*
声明在函数内部的变量和形参为局部变量, 作用域为函数内部
声明在其余部分的变量为全局变量
如果在函数内对全局变量进行改变, 则该改变会被保留
    var a = 100;
    function instance(){
        a += 20;
    }
    alert(instance());      //120
    alert(instance());      //140

无参数无返回值
    声明函数
        function name(){
            函数体;
        }

    调用函数
        name();

有参数无返回值
    声明函数  形参
        function name(a, b, c){
            函数体;
        }
        
    调用函数  实参
        name(x, y, z);

有参数有返回值
    声明函数  
        function name(a, b, c){
            函数体;
            return 表达式;
        }
        函数运行时遇到return就会终止

    调用函数  
        alert(name(x, y, z));

arguments
    每一个函数都内置了arguments, 用于储存实参  用于传参数不确定时
        arguments.length     输出存储的实参个数
        arguments[n]         表示第n + 1个实参

    function sum(){
        var result = 0;
        for(int i = 0; i < arguments.length; i++){
            result += arguments[i];
        }
        return result;
    }
    alert(sum(10, 20, 50));         对传入参数进行求和
*/