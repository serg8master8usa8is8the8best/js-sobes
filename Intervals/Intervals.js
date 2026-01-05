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

// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]))

function mergeIntervals(arr) {
    const sorgedArr = arr.sort((a, b) => a[0] - b[0]);
    let merged = [sorgedArr[0]];

    for (let i = 1; i <= sorgedArr.length - 1; i++) {
        let current = sorgedArr[i];
        let prev = merged.at(-1);

        if (current[0] <= prev[1]) {
            prev.at(-1)[1] = Math.max(prev[1], current[1]);
        } else {
            merged = [...merged, current];
        }
    }

    return merged;
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


