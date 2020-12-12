日期对象的声明

    var d = new Date();                         //不传入参数, 默认为当前系统时间
    var d = new Date("2020-12-10");             
    var d = new Date("2020/12/10");             
    var d = new Date(2020, 11, 10, 22, 30);     //年月日时分秒      月份从0开始
    var d = new Date(100000000);                //以1970.1.1为基点传入毫秒数  1秒 = 1000毫秒
    


日期对象的方法

    d.toLocaleDateString();                     //显示年月日        2020/12/10
    d.toLocaleTimeString();                     //显示具体时间      下午 22:30:30


    set/get既能获取又能够重设而get只能获取
        d.set/getDate()                         //从Date对象中返回一个月中的某一天(1～31)
        d.getDay()                              //从Date对象返回一周中的某一天(0～6)       0为周日
        d.set/getMonth()                        //从Date对象中返回月份(0～11)
        d.set/getFul1Year()                     //从Date对象以四位数返回年份
        d.set/getHours()                        //返回Date对象的小时(0~23)
        d.set/getMinutes()                      //返回Date对象的分钟(0～59)
        d.set/getSeconds()                      //返回Date对象的秒(0～59)
        d.set/getMilliseconds()                 //返回Date对象的毫秒
        d.set/getTime()                         //返回1970.1.1至今的毫秒数


定时器
    var timer = setInterval(func, 1000);        //设置定时器,  每隔1000毫秒(1秒)执行一次func
    
    function func(){
        if (i == 5) {
            clearInterval(timer);               //清空计时器
        }
        document.write(i++ + "</br>")
    }


    var timer = setInterval(function(){         //直接将函数以匿名函数的形式写在setInterval内
        函数体;
    },1000);
    
    
