// git config --global user.name "ASxx"
// git config --global user.email "123456798"
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: "Hello, World!"
    },
    ////定义了名为plus1的一个函数，带有参数x，返回一个比传入的参数大的值，函数的代码块是由花括号包裹起来的部分，
    // function plus1(x) {
    //     return  x+1;  //=>4：y为3，调用函数的结果为3+1
    // }
    // plus1(y)  //函数是一种值，可以赋值给变量，计算函数的值，分号标识了赋值语句的结束

    // var square = function (x) {
    //     return x*x;
    // };
    // square(plus1(y)) //=> 16：在一个表达式中调用两个函数

    ////当将函数和对象合写在一起时，函数就变成了“方法”：

    ////当函数赋值给对象的属性，我们称为“方法”，所有的JavaScript对象都含有方法
    // var a =[];//创建一个空数组
    // a.push(1,2,3); //push（）方法向数字中添加元素
    // a.reverse(); //另一个方法：将数组玄素的次序反转

    ////我们也可以定义自己的方法，“this”关键字是对定义方法的对象的引用：这里的例子是
    ////上文中提到的包含两个点位置信息的数组
    // points.dist = function () { //定义一个方法用来计算两点之间的距离
    //     var p1 = this[0]; //通过this获得对当前数组的引用
    //     var p2 = this[1]; //并取得调用的数组前两个元素
    //     var a = p2.x - p1.x; //x坐标轴上的距离
    //     var b = p2.y - p1.y; //y坐标轴上的距离
    //     return Math.sqrt(a*a+我们称为b*b); //勾股定理，用Math.sqrt（）来计算平方根
    // };
      
    // point.dist() //=> 1.414：求得两个点之间的距离

    //现在，给出一些控制语句的例子，这里的实例函数体内包含了最常见的JavaScript控制语句：

    ////这些JavaScript语句使用该语法包含条件判断和循环，使用了类似C、C++、Java和其他语言的语句

//     function abs(x) { //求绝对值的函数
//         if (x>=0) { //if 语句。。。
//             return x; //如果比较结果为true 则执行这里的代码。
//         }  //子句的结束。
//         else{           //当if条件不满足时执行else 子句
//             return -x;
//         } //如果分支中只有一条语句，花括号是可以省略的 if/else中嵌套的return语句
//     }

//     function factorial(n) { //计算阶乘的函数
//         var product =1; //给product赋值1
//         while (n>1) { //当（）内的表达式为true时循环执行{}内的代码
//             product *= n; //“product = product * n；”的简写像是
//             n--;  //“n+1；”的简写形式
//         }
//         return product; //返回product，
//     }
//     factorial(4){ //=> 24:1*4*3*2
//         function factorial(2)(n) { //实现循环另一种写法
//             var i,product = 1;  //给product 赋值为1
//             for (i = 2; i <n; i++) { //将i重2自增至n
//                product*=i; //循环体，当循环体中只有一句代码，可以省略{}
//                return product;  //返回计算好的阶乘
//             }
// factorial2(5) //=>120： 1*2*3*4*5
//         }
        
//     }

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;     
        //console.log("\u0020"+"kongge");
        console.log(label.string);
        
    },

    // called every frame
    update: function (dt) {
       
        //console.log(book.topic);
        
    },
});
