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

// создаем timerId для прошлого таймера
// если immediate и нету timerId, то можно выполнить сейчас
// отчищаем timerId
// задаем таймаут с callBack, который вызовет функцию если она не мгновенная и отчистит timerId 
// если мгновенное выплнение, то запускаем функцию с контекстом 

// если мгновенно, то вызываем только в первый раз, дальше таймаут блокирует
// еслиы вызываем потом, то первый вызов блокируется, а 2 вызывается в callBack 


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