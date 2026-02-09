var isAnagram = function (s, t) {
    const sortedS = s.split('').sort().join()
    const sortedT = t.split('').sort().join()

    if (sortedS === sortedT) {
        return true
    }

    return false
}

console.log(isAnagram('anagram', 'nagaram'))
