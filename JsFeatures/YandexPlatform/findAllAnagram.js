// console.log(findAnagrams('cbaebabacd', 'abc'))
// найти все валидные анограммы в строке 
function findAnagrams(s, p) {

    const res = []

    const sortedP = p.split('').sort().join('')

    for (let i = 0; i < s.length - p.length + 1; i++) {
        let subStr = s.slice(i, p.length + i)

        const sortedS = subStr.split('').sort().join('')

        console.log(sortedP, sortedS)

        if (subStr === sortedP) {
            res.push(i)
        }

    }

    return res

};