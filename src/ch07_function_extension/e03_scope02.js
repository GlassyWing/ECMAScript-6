/**
 * Created by manlier on 2016/12/1.
 */
var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}

foo() // 3