
const checkBrackets = (str) => {
    const stack = []
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }

    for (let char of str) {
        // Если открывающая скобка
        if (pairs[char]) {
            stack.push(char);
        }
        // Если закрывающая скобка
        else if (Object.values(pairs).includes(char)) {
            // Проверяем соответствие с последней открывающей
            const lastOpen = stack.pop();
            if (!lastOpen || pairs[lastOpen] !== char) {
                return false;
            }
        }
        // Игнорируем другие символы
    }

    // Если стек пуст - все скобки сбалансированы
    return stack.length === 0;


}


console.log(checkBrackets('{{[[}}]]'))