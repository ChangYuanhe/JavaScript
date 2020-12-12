window对象(window可省略)
    //方法
    alert();                    //弹出警告框
    confirm();                  //弹出一个带确定和取消的提示框返回值：如果点击确定，返回true如果点击取消，返回false 
    prompt("", "");             //弹出一个带输入框的提示框参数：第一个参数：面板上的内容    第二个参数：输入框里面的默认值（可以不传入）

history对象(当前窗口的历史记录(URL不一样))
    //属性 
    history.length              //历史记录条数
    //方法
    history.back();             //退回到上一条历史记录
    history.forward();          //前进到下一个历史记录
    history.go(a);              //a为0刷新当前页面  正整数前进  负整数后退


location对象                    
//URL  协议://主机名:端口号/路径?查询字符串#锚点
    //属性
    location                    //输出location对象(url) 数据类型object
    location.href               //输出网址              数据类型String
    location.protocol           //协议
    location.hostname           //域名或者IP
    location.port               //端口号(默认隐藏)        当前使用网络的软件随意分配的编号 (0~65535, 2 ^ 16 -1)
    location.pathname           //路径
    location.search             //查询字符串
    location.hash               //锚点
    //方法
