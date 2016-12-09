/**
 * Created by manlier on 2016/11/30.
 */
console.log`123`;

var a = 5, b = 10;

function tag(s, v1, v2) {
    console.log('!!',s.raw);
    Array.prototype.forEach.call(s, function (e, i, a) {
        console.log(e);
    });

    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${a + b} world ${a * b}`;

var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    var result = '';
    var i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if(i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg);