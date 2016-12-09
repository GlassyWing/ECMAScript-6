/**
 * Created by manlier on 2016/11/30.
 */

// 普通字符串
console.log(`In javascript '\n' is a line-feed.`);

// 多行字符串
console.log(`In JavaScript this is 
not legal`);
console.log(`string text line 1
string text line 2`);

// 字符串嵌入变量
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}`);

// `符号在模板字符串中需转义
var greeting = `\`Yo\` World!`;

const tmpl = addrs => `
    <table>
        ${addrs.map(addr=>`
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));
// <table>
//
// <tr><td><Jane></td></tr>
// <tr><td>Bond</td></tr>
//
// <tr><td>Lars</td></tr>
// <tr><td><Croft></td></tr>
//
// </table>

// 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
// 写法一
let str = 'return `Hello ${name}!`';
let func = new Function('name', str);
console.log(func('Jack')); // Hello Jack!

// 写法二
str = '(name) => `Hello ${name}!`';
func = eval(str);
console.log(func('Jack')); // Hello Jack!

