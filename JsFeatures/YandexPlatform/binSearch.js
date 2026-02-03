// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         const value = arr[mid];

//         if (value === target) {
//             return mid;
//         }

//         if (value < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {

        let center = Math.floor((start + end) / 2)

        let value = arr[center]

        if (value === target) {
            return center
        }

        if (value < target) {
            start = center + 1
        } else {
            end = center - 1
        }

    }

    return - 1
}

// пример использования
const arr = [1, 4, 7, 9, 15, 20];
console.log(binarySearch(arr, 9));  // 3
console.log(binarySearch(arr, 10)); // -1