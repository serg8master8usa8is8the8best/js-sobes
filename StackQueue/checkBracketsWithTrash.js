const brackets = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
])

const charPari = '{([])}'

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