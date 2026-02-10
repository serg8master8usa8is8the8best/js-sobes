
// проходимся по каждому элементу в массиве 

// проходимся по item.length - subStr.length + 1

// если подстрока с i, до subStr.length === subStr, то пушим и заканчивем break 

// возвращаем отфильтрованный массив 

function findSubstring(substring, arr) {
    let result = []
    for (let item of arr) {
        for (let i = 0; i < item.length - substring.length + 1; i++) {
            if (item.substr(i, substring.length) === substring) {
                result.push(item)
                break
            }
        }
    }

    return result
};