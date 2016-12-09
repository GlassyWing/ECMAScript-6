/**
 * Created by manlier on 2016/11/30.
 */

console.log("\u0061");
console.log("\uD842\uDFB7");

// 只限于\u0000--\uFFFF
console.log("\u20BB7");

// ES6 支持\u{XXXX...}的格式
console.log("\u{20BB7}"); // "𠮷"
console.log("\u{41}\u{42}\u{43}"); // "ABC"

let hello = 123;
console.log("hell\u{6F}"); // hello

console.log('\u{1F680}' == '\uD83D\uDE80'); // true

var s = "𠮷";
console.log(s.length);  // 2
console.log(s.charAt(0)); // '�'
console.log(s.charAt(1)); // '�'
console.log(s.charCodeAt(0)); // 55362(10) 0xD842(16)
console.log(s.charCodeAt(1)); // 57271(10) 0xDFB7(16)

s = '𠮷a';
console.log(s.codePointAt(0)); // 134071 正确识别

// 第一个码点能正确识别，但第二个仍旧和charCodeAt的行为相同
console.log(s.codePointAt(1)); // 57271 和charCodeAt方法一致
console.log(s.codePointAt(2)); // 97

// for...of 循环可以正确识别
for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61

// fromCharCode无法识别大于0xFFFF的字符,
console.log(String.fromCharCode(0x0BB7));
// 发生了截断，结果和0x0BB7一样
console.log(String.fromCharCode(0x20BB7));  // ''

// fromCodePoint能正确解析
console.log(String.fromCodePoint(0x20BB7)); // '𠮷'
console.log(
    String.fromCodePoint(0x78, 0x1f680, 0x79) == "x\uD83D\uDE80y"
); // true "x🚀y"


