// Логическое ИЛИ (||) - возвращает ПЕРВОЕ "истинное" (truthy) значение
console.log(null || 1) // 1
console.log(null || 0 || 1) // 1
console.log(null || 0 || 'string') // "string"
console.log(undefined || null || 0 || false) // false

// Дополнительные примеры для ясности
console.log(0 || 1) // 1

// Оператор нулевого слияния (??) - возвращает ПЕРВОЕ значение, которое НЕ null и НЕ undefined
console.log(null ?? 1) // 1
console.log(0 ?? 1) // 0

// Логическое И (&&) - возвращает ПЕРВОЕ "ложное" (falsy) значение или последнее, если все true
console.log(1 && 2 && null && 3) // null
console.log(1 && 2 && 3) // 3
console.log(1 && 'string') // "string"
