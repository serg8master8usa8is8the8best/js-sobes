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
