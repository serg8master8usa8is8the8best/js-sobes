const brackets = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
])

const charPari = '{([])}'

// создаем пары и все пары

// только их пушим в stack и берем оттуда 

// если stack пустой, то все ок 

function checkBrackets(str) {
    let stack = []

    for (let char of str) {

        if (!charPari.includes(char)) {
            continue
        }

        if (brackets.has(char)) {
            stack.push(brackets.get(char))
        } else {
            let lastChar = stack.at(-1)
            if (lastChar === char) {
                stack.pop()
            }
        }
    }

    return stack.length === 0
}