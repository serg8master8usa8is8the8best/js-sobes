function compress(list) {
    if (list.length === 0) return [];

    // Создаем копию и сортируем
    const sortedList = [...list].sort((a, b) => a - b);

    const result = [];
    let start = 0;

    for (let i = 1; i <= sortedList.length; i++) {
        // Если текущий элемент продолжает последовательность или это последний элемент
        if (i < sortedList.length && sortedList[i] - sortedList[i - 1] === 1) {
            continue; // продолжаем последовательность
        } else {
            // Завершаем текущий диапазон
            if (start === i - 1) {
                // Одиночный элемент
                result.push(sortedList[start]);
            } else {
                // Диапазон элементов
                result.push([sortedList[start], sortedList[i - 1]]);
            }
            start = i; // начинаем новый диапазон
        }
    }

    return result.map((res) => res instanceof Array ? res.join('-') : res).join(',')
}

// [
//   0, 1, 2,  3, 4, 5, 8, 9, 11

// ]


console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]))
console.log(compress([1, 4, 3, 2]))