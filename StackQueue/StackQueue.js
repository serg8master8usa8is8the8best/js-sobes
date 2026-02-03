// Stack
// Last in First Out
// Array

// Queue
// First in First Out
// Двусвязный список 

var isValid = function (s) {
    let stack = []

    const characters = {
        '<': '>',
        '[': ']',
        '{': '}',
        '(': ')',
    }

    for (let char of s) {
        if (char in characters) {
            stack.push(characters[char])
        } else if (stack.at(-1) !== char) {
            return false
        } else {
            stack.pop()
        }
    }

    if (stack.length !== 0) {
        return false
    }

    return true

};


// console.log(isValid('<<>>(())'))
// console.log(isValid('<<(())>>'))
// console.log(isValid('<<><()'))


var removeDuplicates = function (s) {
    let stack = []

    for (let char of s) {
        if (stack.length && stack.at(-1) === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')

};

// console.log(removeDuplicates('abbaca'))
// console.log(removeDuplicates('azxxzy'))

var removeStars = function (s) {
    let stack = []

    for (let char of s) {
        if (char === '*' && stack.length) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')

};

// console.log(removeStars('leet**cod*e'))
// console.log(removeStars('erase*****'))


var simplifyPath = function (path) {
    let stack = []

    let optimizedPath = path.split('/').filter((path) => path !== '' && path !== '.')

    optimizedPath.forEach((currPath) => {
        if (currPath === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else {
            stack.push(currPath)
        }
    })

    return '/' + stack.join('/')
};

// console.log(simplifyPath('/home/user/Documents/../Pictures'))
// console.log(simplifyPath('/home//foo/'))


RecentCounter.prototype.ping = function (t) {

};