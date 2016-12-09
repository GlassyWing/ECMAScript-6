/**
 * Created by manlier on 2016/12/1.
 */
function foo({x, y = 5}) {
    console.log(x, y);
}

foo({});
foo({x: 1});
foo({x: 1, y: 2});
// foo(); // TypeError: Cannot match against 'undefined' or 'null'.

// 当没有传递值时，默认为{}
// 然后再进行解构
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

// 当没有传递值时，默认为{x: 0, y: 0}
// 然后再进行解构
function m2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

console.log(m1()); // [0, 0]
console.log(m2()); // [0, 0]

console.log(m1({})); // [ 0, 0 ]
console.log(m2({})); // [ undefined, undefined ]

console.log(m1({x: 3, y: 8}));  // [ 3, 8 ]
console.log(m2({x: 3, y: 8}));  // [ 3, 8 ]

console.log(m1({x: 3})); // [3, 0]
console.log(m2({x: 3})); // [3, undefined]

console.log(function (a) {}.length); // 1
console.log(function (a = 5) {}.length); // 0
console.log(function (...args) {}.length); // 0
console.log(function (a = 0, b, c) {}.length); // 0
console.log(function (a, b = 1, c) {}.length); // 1
