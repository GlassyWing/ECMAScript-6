/**
 * Created by manlier on 2016/12/1.
 */

// 在ES6之前，通过如下方法设置默认值
function log(x, y) {
    y = y || "World";
    console.log(x, y);
}

log("Hello");  // "Hello World"
log("Hello", "China"); // "Hello China"
log("Hello", '');   // "Hello World"

// es6 可为形参设置默认值
log = function (x, y = "World") {
    console.log(x, y);
};

log("Hello");  // "Hello World"
log("Hello", "China"); // "Hello China"
log("Hello", '');   // "Hello"

// 形参的作用域在函数作用域中
// 所以在函数体不能重复声明变量
function foo(x = 5) {
    // let x = 1;  // 重复声明
    // const x = 2; // 重复声明
}


