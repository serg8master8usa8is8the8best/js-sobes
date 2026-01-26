console.log(Number('   123   ')) // 12
console.log(Number('   123z   ')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number('  z123  ')) // NaN

console.log(Boolean(null)) // false
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(' ')) // true
