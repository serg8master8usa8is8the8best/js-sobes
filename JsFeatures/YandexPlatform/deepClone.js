function deepClone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj)
    }
}

// function deepClone(obj) {
//     // Базовый случай: если это примитив или null, возвращаем как есть
//     if (obj === null || typeof obj !== 'object') {
//         return obj
//     }

//     // Обработка массива
//     if (Array.isArray(obj)) {
//         return obj.map((item) => deepClone(item))
//     }

//     // Обработка обычного объекта
//     const clonedObj = {}

//     for (let key of Object.keys(obj)) {
//         // Проверяем, чтобы копировать только собственные свойства
//         if (obj.hasOwnProperty(key)) {
//             clonedObj[key] = deepClone(obj[key])
//         }
//     }

//     return clonedObj
// }

// проверяем на объект, если нет, то возвращаем 

// проходимся если массив и для каждого вызываем clone 

// создаем отфильтрованный массив

// проходимся по ключу и добавляем в новый массив по ключу deepClone()

// возвращаем deepClone 

function deepClone(obj) {
    // проверить на объект
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // проверить на массив и его смапить

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }

    const cloneObj = {}

    // копируем каждый ключ и вызываем на него рекурсию, 
    // которая если что вернет примитив или обработает массив 
    for (let key of Object.keys(obj)) {
        cloneObj[key] = deepClone(obj[key])
    }

    // возвращаем копируемый объект 
    return cloneObj


}