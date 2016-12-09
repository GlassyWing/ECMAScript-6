/**
 * Created by manlier on 2016/12/9.
 */
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};

export function multiply(x, y) {
    return x * y;
}

// 通常情况下，export输出的变量就是本来的名字，
// 但是可以使用as关键字重命名。
function v1() {}

function v2() {}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
}
//上面代码使用as关键字，重命名了函数v1和v2的对外接口。
// 重命名后，v2可以用不同的名字输出两次。

// export命令规定的是对外的接口，
// 必须与模块内部的变量建立一一对应关系。

// 报错
// export 1;

// 报错
// var m = 1;
// export m;

// 写法一
export var m = 1;

// 写法二
// var m = 1;
// export {m};

// 写法三
// var n = 1;
// export {n as m};

// export语句输出的接口，与其对应的值是动态绑定关系，
// 即通过该接口，可以取到模块内部实时的值。
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);