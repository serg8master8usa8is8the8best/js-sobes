// console.log(findAnagrams('cbaebabacd', 'abc'))
// найти все валидные анограммы в строке 


// нужно найти все анаграммы именно в строке 

// сортируем анограмму 2

// проходимся по строке длинной length - anagra.length + 1

// если отсортированный кусок строки равен отсортированной анограмме, то пушим 


function findAnagrams(s, p) {

    const res = []

    const sortedP = p.split('').sort().join('')

    for (let i = 0; i < s.length - p.length + 1; i++) {
        let subStr = s.slice(i, p.length + i)

        if (subStr === sortedP) {
            res.push(i)
        }

    }

    return res

};