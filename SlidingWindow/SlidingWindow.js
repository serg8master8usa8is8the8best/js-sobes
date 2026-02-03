// найти максимум в окне 4
var findMaxAverage = function (nums, k) {
    let begin = 0

    let result = -Infinity
    let windowState = 0

    for (let end = 0; end < nums.length; end++) {
        windowState += nums[end]

        if (end - begin + 1 === k) {
            if (windowState > result) result = windowState

            windowState -= nums[begin]
            begin += 1
        }
    }

    return result / k
};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))

var minSubArrayLen = function (target, nums) {
    let begin = 0
    let windowState = 0
    let result = Infinity

    for (let end = 0; end < nums.length; end++) {
        windowState += nums[end]

        console.log(windowState, target)

        while (windowState >= target) {
            let windowSize = end - begin + 1
            if (result > windowSize) {
                result = windowSize
            }

            windowState -= nums[begin]
            begin += 1
        }
    }

    if (result === Infinity) {
        return 0
    }
    return result
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))