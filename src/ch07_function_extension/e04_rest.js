/**
 * Created by manlier on 2016/12/1.
 */
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(2, 5, 3)); // 0

// function sortNumbers() {
//     return Array.prototype.slice.call(arguments).sort();
// }

const sortNumbers = (...numbers) => numbers.sort();
