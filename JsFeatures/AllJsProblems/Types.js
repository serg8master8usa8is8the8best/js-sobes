console.log(x) // undefined не смотря на хостинг
var x = 5

console.log(x) // упадет с ошибкой
//  const x = 5

const calc = () => {
    return 2 + 2
}

console.log(typeof null) // object - ошибка, но исторически так сложилось
console.log(typeof calc) // object, но выводит function
console.log(typeof NaN) // number - надо определять по isNan
console.log(typeof []) // object - Array.isArray
console.log(typeof undefined) // undefined
