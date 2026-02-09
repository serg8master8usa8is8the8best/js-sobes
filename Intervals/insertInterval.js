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