/**
 * Created by manlier on 2016/11/28.
 */
let foo;
({foo} = {foo: 1}); // 成功
console.log(foo);

let baz;
({bar: baz} = {bar: 1}); // 解析器当作代码块
console.log(baz);

var obj = {
    p: [
        'hello',
        {y: 'World'}
    ]
};

var {p: [x, {y}]} = obj;
console.log(x);
console.log(y);

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

// loc 和 start 都是模式
var {loc: {start: {line}}} = node;
console.log(line);

let obj1 = {};
let arr = [];
({foo: obj1.prop, bar: arr[0]} = {foo:123, bar: true});
console.log(obj1, arr);
