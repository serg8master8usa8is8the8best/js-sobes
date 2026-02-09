function topKFrequent(nums, k) {
    let map = new Map()

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }


    return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map((num) => num[0])
}


console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3]), 2)
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3]), 3)
console.log(topKFrequent([1, 1, 1, 2,]), 3)