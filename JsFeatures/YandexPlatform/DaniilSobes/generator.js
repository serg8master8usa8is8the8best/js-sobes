/*
    Напишите функцию, которая будет возвращать комбинацию слов,
    для переданного массива массивов слов.
    Комбинации должны быть перечислены в порядке из примера.
    Если комбинации закончились, то функция возвращает `undefined`.
    При решении нельзя пользоваться генераторами.
*/

function allSequences(arr) {


    return function () {

    }
}

const nextSequence = allSequences([
    [0, 1, 2],
    ["a", "b"],
    ["?", "!", "."],
]);

console.log(nextSequence()); // "0 a ?"
console.log(nextSequence()); // "0 a !"
console.log(nextSequence()); // "0 a ."
console.log(nextSequence()); // "0 b ?"
// ...
console.log(nextSequence()); // "2 b ."
console.log(nextSequence()); // undefined