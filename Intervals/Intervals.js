// распланировать митинги чтобы можно было забить максимум

//console.log(mitingsTask([[7, 10], [2, 4], [0, 2]]))

function mitingsTask(arr) {
    // отсортировать по началу митинга

    sorgedArr = arr.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i <= arr.length - 1; i++) {
        const prev = arr[i - 1];
        const current = arr[i];

        if (current[0] < prev[1]) return false;
    }

    return true;
}

// console.log(intervalUserVisiters([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]))

// [[0, 2], [5, 10], [13, 23], [24, 25]]
// [[1, 5], [8, 12], [15, 24], [25, 26]]

function intervalUserVisiters(user1, user2) {
    // если они отсортирванные, то оставить - иначе nlogn
    let first = 0;
    let second = 0;

    let result = [];

    while (first < user1.length && second < user2.length) {
        const firstUser = user1[first];
        const secondUser = user2[second];

        if (firstUser[0] < secondUser[0]) {
            if (firstUser[1] > secondUser[0]) {
                const intercection = [secondUser[0], firstUser[1]];
                result.push(intercection);
                first++;
                second++;
                continue;
            } else {
                first++;
                continue;
            }
        }

        if (firstUser[0] > secondUser[0]) {
            if (firstUser[0] < secondUser[1]) {
                const intercection = [firstUser[0], secondUser[1]];
                result.push(intercection);
                first++;
                second++;
                continue;
            } else {
                second++;
                continue;
            }
        }
    }

    return result;
}

// console.log(mergedIntervals([[1, 3], [2, 6], [5, 10], [15, 18]]))


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

// console.log(insertIntervals([[1, 3], [6, 9]], [2, 5]))
// [[1,5], [6,9]]

function insertIntervals(arr, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    // 1. Добавляем все интервалы, которые полностью до нового интервала
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // 2. Мерджим все пересекающиеся интервалы
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // 3. Добавляем оставшиеся интервалы
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// console.log(meetingRoomCount([[0, 30], [5, 10], [15, 20]]))

function meetingRoomCount(arr, current) {

}