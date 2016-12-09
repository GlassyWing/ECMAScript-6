/**
 * Created by manlier on 2016/11/27.
 */
{
    let a = 10;
    var b = 1;
}

// a
// b
for (let i = 0; i < 10; i++) {}
// console.log(i);

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}

a[6]();