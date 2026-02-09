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
