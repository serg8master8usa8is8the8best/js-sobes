
// console.log(intervalUserVisiters([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]))

// [[0, 2], [5, 10], [13, 23], [24, 25]]
// [[1, 5], [8, 12], [15, 24], [25, 26]]

// пройтись указателем по всем интервалам - если нету пересечения, то увелисить 1
// если есть пересечение, то увеличить 2 

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
