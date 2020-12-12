字符串的声明
    var str = new String("hello");          //数据类型为object而非string
    var str = String("hello");              //省略new
    var str = 100 + "hello";                //字符串常量赋值

    str.length                              //字符串中字符个数, 中文算作一个字符
类似数组, 但字符串是只读的, 不可以修改         //str[0] = 'a'修改不了, 任何函数也无法修改


str.charCodeAt(a)                           //输出下标为a的字符的ASCII码值
str.fromCharCode(97, 98, 99);               //abc   将ASCII码转换为字符串
str.toLowerCase();                          //转为全小写
str.toUpperCase();                          //转为全大写


字符串查找
    supStr.indexOf(subStr, start);          //在supstr中查找从下标start开始第一次出现substr的位置
    supStr.lastIndexOf(subStr, start);      //在supstr中由start开始从右向左查找最后一次出现subStr的位置
    supStr.search(subStr);                  //在supstr中查找第一次出现subStr的位置   subStr可以为正则表达式


字符串提取
    str.substring(a, b);                    //提取[a, b)组成字符串      slice用法与其类似
    str.substr(a, length);                  //从下标a开始提取长度为length的字符串
    str.replace("old", "new");              //将第一个 "old" 替换为 "new"       
    str.replace(/old/g, "new");             //将全部的 "old" 替换为 "new"       

字符串分割
    supStr.split("subStr");                 //将supStr以subStr为分隔符分割, 子串以数组形式返回  相邻的分隔符会产生空字符串
        var supStr = new String("how  are you");
        var arr = supStr.split(" ");        // how,  , are, you