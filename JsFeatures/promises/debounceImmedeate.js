function debounce(func, wait, immediate = false) {
    let timeoutId

    return function (...args) {
        const context = this
        const later = () => {
            timeoutId = null
            if (!immediate) {
                func.apply(context, args)
            }
        }

        const callNow = immediate && !timeoutId

        clearTimeout(timeoutId)
        timeoutId = setTimeout(later, wait)

        if (callNow) {
            func.apply(context, args)
        }
    }
}


function debounce(func, timer, immediate = false) {
    let timerId
    return function (...args) {

        const context = this

        const later = () => {
            timeoutId = null
            if (!immediate) {
                func.apply(context, args)
            }
        }

        const callNow = immediate && !timerId

        clearTimeout(timerId)
        timerId = setTimeout(later, timer)

        if (callNow) {
            func.apply(context, args)
        }
    }
}