/**
 * Created by manlier on 2016/11/29.
 */
// !!# includes(), startsWith(), endsWith()
var s = 'Hello world!';

console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true

// 可指定搜索开始位置
console.log(s.startsWith('world', 6)); // true
console.log(s.endsWith('Hello', 5)); // true
console.log(s.includes('ll', 2)); // true

// !!# repeat()
console.log('x'.repeat(3)); // 'xxx'
console.log('hello'.repeat(2)); // 'hellohello'
console.log('na'.repeat(0)); // ''

// 有小数时，会取整
console.log('na'.repeat(2.9)); // 'nana'
console.log('na'.repeat(-0.9)); // ''

// console.log('na'.repeat(Infinity)); // RangeError
// console.log('na'.repeat(-1)) // RangeError

// 非数被看作0
console.log('na'.repeat(NaN));
