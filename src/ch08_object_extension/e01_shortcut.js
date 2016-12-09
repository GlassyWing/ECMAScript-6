/**
 * Created by manlier on 2016/12/5.
 */

var birth = '2000/01/01';

var Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }
};

// 函数的name属性，返回函数名。
// 对象方法也是函数，因此也有name属性。
var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};

console.log(person.sayName.name);  // sayName
console.log(person.firstName.name); // undefined

console.log(new Function().name);   // anonymous

function doSomething() {

}

console.log(doSomething.bind().name); // bound doSomething

// 如果对象的方法是一个Symbol值，
// 那么name属性返回的是这个Symbol值的描述。
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() {},
    [key2]() {},
};
console.log(obj[key1].name ); // "[description]"
console.log(obj[key2].name); // ''