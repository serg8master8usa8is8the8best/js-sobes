

// сортируем и добавляем в merged первый элемент
// сравниваем с последним merged 

function mergedIntervals(arr) {
    const sortedArr = arr.sort((a, b) => a[0] - b[0])
    let merged = [arr[0]]

    for (let i = 1; i < sortedArr.length; i++) {

        let prevMerged = merged.at(-1)

        let current = sortedArr[i]

        if (prevMerged[1] >= current[0]) {

            merged.at(-1)[1] = Math.max(current[1], prevMerged[1])

        } else {
            merged = [...merged, current]
        }

    }

    return merged
}

// console.log(mergedIntervals([[1, 3], [2, 6], [5, 10], [15, 18]]))