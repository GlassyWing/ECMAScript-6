/**
 * Created by manlier on 2016/12/4.
 */

// ES5的多重嵌套函数
function insert(value) {
    return {
        into: function (array) {
            return {
                after: function (afterValue) {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            }
        }
    }
}
console.log(insert(2).into([1, 3]).after(1)); // [1, 2, 3]

// 使用ES6的lambda表达式
let insert2 = (value) => (
    {
        into: (array) => (
            {
                after: (afterValue) => {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            })
    });
console.log(insert2(2).into([1, 3]).after(1)); // [1, 2, 3]

const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

addThenMult(5);

// λ演算

// (λx.λy.y x)(λz.u) -> λy.y(λz.u)
var fix = (y => y)(z => z + 1);
console.log(fix(1));  // 2

// λf.λx.fx
var lambda = x => (y => x * x + y * y);
console.log(lambda(3)(2));
