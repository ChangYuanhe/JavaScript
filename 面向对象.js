声明对象
    var obj1 = new Object();

    var obj2 = Object();                //省略new

添加属性
    obj1.username = "常元和";
    obj1.age = 18;


    obj2["username"] = "IronMan";
    obj2["sex"] = "Man";
    //属性的使用与变量没有区别

添加方法
    obj1.show = function(){
        alert("My name is" + obj1.username +", my age is" + obj1.age);
    }
    obj1.show();


    obj2["show"] = function(){
        函数体;
    }
    obj2["show"]();
    //方法的使用与函数没有区别


直接通过对象常量赋值完成声明对象和添加属性与方法
    var obj3 = {
        username : "常元和",
        "age": 18,                  //属性和方法可以加引号
        show: function(){
            函数体;
        }
    };
    //调用的方法没有区别

delete obj3.username;               //删除属性和方法