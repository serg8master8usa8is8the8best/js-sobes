function deepClone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj)
    }
}

function deepClone(obj) {
    // Базовый случай: если это примитив или null, возвращаем как есть
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // Обработка массива
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }

    // Обработка обычного объекта
    const clonedObj = {}

    for (let key of Object.keys(obj)) {
        // Проверяем, чтобы копировать только собственные свойства
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key])
        }
    }

    return clonedObj
}
