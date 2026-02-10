

// создаем массив с 1 элементом 
// походимся по массиву с 1 и если текущий и - 1 элемент не равны, то пушим 

function removeExtraLetters(str) {
    if (!str) return "";

    let result = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += str[i];
        }
    }

    return result;
}

// Input: "ллллиииишшшнийййй тттексттт"
// Output: "лишний текст"