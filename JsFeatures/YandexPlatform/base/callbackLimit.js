const limit = (fn, maxCalls) => {
    let calls = 0

    return function (...args) {
        if (calls < maxCalls) {
            calls++
            return fn.apply(this, args)
        }
        // Можно вернуть undefined или выбросить ошибку
        return undefined
    }
}
