/**
 * Created by manlier on 2016/12/9.
 */
// main.js
import {firstName, lastName, year} from "./profile";

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

// import {area, circumference } from 'circle';
//
// console.log('圆面积: ' + area(4));
// console.log('圆周长: ' + circumference(14));

// 上面写法是逐一指定要加载的方法，整体加载的写法如下。
import * as circle from "./circle";
console.log("圆面积: " + circle.area(4));
console.log("圆周长: " + circle.circumference(14));