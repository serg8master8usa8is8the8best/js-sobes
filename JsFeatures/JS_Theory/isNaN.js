// NaN
console.log(isNaN(NaN)) // true
console.log(isNaN(123)) // false
console.log(isNaN('123')) // false
console.log(isNaN('abc')) // true

// isNaN - сначала приобразует в число, а потом сравнивает

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(123)) // false
console.log(Number.isNaN('123')) // false
console.log(Number.isNaN('abc')) // false

// Number.isNaN - только если число
