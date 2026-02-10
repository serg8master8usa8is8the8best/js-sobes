const LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// фильтруем лишние символы и приводим к регистру 

// добавляем все в стек

// если количество элементов равно, то pangram 

function isPangram(sentence) {
    let stack = new Set()

    let preparedString = sentence.toLowerCase().split('').filter((item) => item.toLowerCase() !== item.toUpperCase())

    for (let char of preparedString) {
        stack.add(char)
    }

    if (Array.from(stack).length === LETTERS.length) {
        return true
    }

    return false


};
