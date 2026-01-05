// простая реализация - перевернуть строку 
// console.log(reverceString('12345'))
// память O(1) время O(n)
function reverceString(str) {
  let start = 0
  let end = str.length - 1
  let result = str.split('')

  while (start < end) {
    let def = result[start]
    result[start] = result[end]

    result[end] = def

    start = start + 1
    end = end - 1

  }

  return result.join('')

}

// проверить на палендром с учетом пробелов, символов и знаков припинания 
// console.log(palendrome('А роза, упала на лапу Аз,ора'))

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase()
}

function palendrome(str) {
  let start = 0
  let end = str.length - 1
  let arrStr = str.split('')

  while (start < end) {
    if (arrStr[start] === ' ' || !isLetter(arrStr[start])) {
      start++
      continue
    }


    if (arrStr[end] === ' ' || !isLetter(arrStr[end])) {
      end--
      continue
    }

    if (arrStr[start].toLowerCase() !== arrStr[end].toLowerCase()) {
      return false
    }

    start++
    end--
  }

  return true
}


// console.log(twoSumArraySroted([2,7,11,15], 13))
//  console.log(twoSummArraySortedBetween([2,7,11,15], 13))

function twoSumArraySroted(arr, summ) {

  let start = 0
  let end = 1

  while (start < arr.length && end < arr.length) {
    const summArr = arr[start] + arr[end]
    if (summArr > summ) {
      start++

    }
    if (summArr < summ) {
      if (end == arr.length - 1) {
        start++
      } else {
        end++
      }
    }
    if (summArr === summ) {
      return [start + 1, end + 1]
    }
  }
}

// O(n)
function twoSummArraySortedBetween(arr, summ) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const currentSumm = arr[start] + arr[end]

    if (currentSumm === summ) {
      return [start++, end++]
    }

    if (currentSumm > summ) {
      end--
    } else {
      start++
    }
  }
}


// console.log(ThreeSum([-1,0,1,2,-1,-4]))
// O(n*2)
function ThreeSum(arr) {
  const sortedArr = arr.sort()
  const result = new Set()
  const n = arr.length

  arr.forEach((target, index) => {
    let left = index + 1
    let right = n - 1

    while (left < right) {
      const currentSumm = sortedArr[left] + sortedArr[right]
      if (currentSumm === -target) {
        result.add(JSON.stringify([sortedArr[left], sortedArr[right], target]))
      }

      if (currentSumm > -target) {
        right--
      } else {
        left++
      }

    }

  })
  return Array.from(result).map((str) => JSON.parse(str))

}

// [-4,-1,0,3,10]
// =         16  100
// 16          100
// 16       9

// console.log(SqueresOfSortedArray([-4,-1,0,3,10]))

function SqueresOfSortedArray(arr) {

  let start = 0
  let end = arr.length - 1

  let result = []

  for (let i = arr.length - 1; i >= 0; i--) {
    const startValue = arr[start] ** 2
    const endValue = arr[end] ** 2

    if (startValue >= endValue) {
      result[i] = startValue
      start++
    } else {
      result[i] = endValue
      end--
    }
  }

  return result

}


// console.log(bottle([1,8,6,2,5,4,8,3,7]))
// 49

function bottleSize(arr) {

  let start = 0
  let end = arr.length - 1
  let maxSize = 0

  while (start < end) {
    const weight = end - start

    let size = 0
    if (arr[start] < arr[end]) {
      size = weight * arr[start]
      start++

    } else {
      size = weight * arr[end]
      end--
    }

    if (size > maxSize) {
      maxSize = size
    }

  }

  return maxSize
}


// console.log(removeDublicates([1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5]))
// [1,1,1,2,2,3,3,3,4,5,5]
//                   4*

//                      5*


//  1234     
function removeDublicates(arr) {
  let result = []
  let k = 0
  arr.forEach((val, index) => {
    if (val !== arr[k])
      k++
    result[k] = val
  })
}


console.log(moveZeroes([0, 1, 0, 3, 12]))

function moveZeroes(arr) {
  let start = 0
  let end = arr.length - 1
  let res = []

  if (arr.length === 1) {
    return arr
  }

  while (start < end) {

    if (arr[start] == 0) {

    }
  }


}