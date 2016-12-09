/**
 * Created by manlier on 2016/12/3.
 */
console.log(...[1, 2, 3]);

console.log(1, ...[2, 3, 4], 5);

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
add(...numbers);


// 替代数组的apply方法
function f(x, y, z) {
    // ...
}

var args = [0, 1, 2];
f.apply(numbers, args);  // ES5 的写法
f(...args);  // ES6 的写法

console.log((function(){}).bind({}).name);
console.log((function(){}).bind({}).name);

function Timer() {
    this.s1 = 0;
    this.s2 = 0;

    setInterval(() => this.s1++, 500);

    setInterval(function () {
        this.s2++
    }, 500);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 1100);
setTimeout(() => console.log('s2: ', timer.s2), 1100);

