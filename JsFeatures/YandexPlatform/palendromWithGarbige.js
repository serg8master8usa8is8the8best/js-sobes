const isLetter =  (str) => {
    return str.toLowerCase() !== str.toUpperCase()
}


function isPalendrome(str) {


    let left = 0
    let right = str.length - 1

    while (left < right) {
        console.log(left, right)


        if (!isLetter(str[left])) {
            left = ++left
            continue
        }

       if (!isLetter(str[left])) {
            right = --right
            continue
        }
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false
        }

        left = ++left
        rigth = --right
    }

    return true

}


console.log(isPalendrome('Казак'))