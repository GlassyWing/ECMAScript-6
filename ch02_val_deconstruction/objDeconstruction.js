/**
 * Created by manlier on 2016/11/28.
 */
var {bar, foo} = {foo: "aaa", bar:"bbb"};
console.log(bar);
console.log(foo);

var {baz} = {foo: "aaa", bar:"bbb"};
console.log(baz);

var {foo:baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz);

let obj = {first: "hello", last: "world"};
let {first: f, last: l} = obj;
console.log(f);
console.log(l);

// let foo;
// let {foo} = {foo:1}; // SyntaxError

// let baz;
// let {bar: baz} = {bar: 1}; // SyntaxError


