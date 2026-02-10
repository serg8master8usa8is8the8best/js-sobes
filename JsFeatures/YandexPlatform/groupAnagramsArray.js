// тоже самое - по мапе идем и кладем отсортированные ключи 

// пушим в массив 

function groupAnagrams(arr) {
    const map = new Map()
    for (let item of arr) {
        let sortedItem = [...item].sort()
        let key = sortedItem.join('-')
        if (map.has(key)) {
            let prevValue = map.get(key)
            map.set(key, [...prevValue, item])
        } else {
            map.set(key, [item])
        }
    }

    let result = []

    for (let [key, value] of map.entries()) {
        result.push([...value])
    }

    return result
};

// Input 1: ["ab", "ba", "abc", "bca"]
// Output 1: [["abc","bca"],["ab","ba"]]