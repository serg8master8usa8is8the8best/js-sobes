
// найти сумму 2 чисел - массив не отсортирован 
var twoSum = function (nums, target) {
    const cache = {};

    for (let i = 0; i < nums.length; i++) {
        const secondOperator = target - nums[i];

        if (cache.hasOwnProperty(secondOperator)) {
            return [cache[secondOperator], i];
        }

        cache[nums[i]] = i;

    }

};

// найти единственное уникальное число в массиве 
// за Оn по памяти 
var singleNumber = function (nums) {

    let seen = new Set()


    for (let num of nums) {
        if (seen.has(num)) {
            seen.delete(num)
        } else {
            seen.add(num)
        }
    }

    return seen.values().next().value

};

// за O1 по памяти 
var singleNumber = function (nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num; // XOR операция
    }

    return result;
};

