/**
 * Created by manlier on 2016/11/30.
 */

// 虽然这两个字符表示相同，但是javascript不能识别
console.log("\u01D1" == "\u004f\u030c"); // false

console.log("\u01D1".length); // 1
console.log("\u004F\u030c".length); // 2

// normalize 可将这两种不同表示正规化
console.log(
    "\u01D1".normalize() === "\u004f\u030c".normalize()
); // true

// 标准等价分解
console.log(
    "\u01D1".normalize('NFD') == '\u004f\u030c'
); // true

// 标准等价合成
console.log(
    "\u004f\u030c".normalize("NFC") == "\u01D1"
);