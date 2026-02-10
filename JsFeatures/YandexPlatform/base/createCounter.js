export function createCounter(init) {
    return {
        value: init,
        init: init,
        increment() {
            return this.init++
        },
        decrement() {
            return this.init--
        },
        reset() {
            this.value = init
            return init
        },
    }
}

export function createCounter(init) {
    let initValue = init

    return {
        increment() {
            initValue = ++initValue
            return initValue
        },
        decrement() {
            initValue = --initValue
            return initValue
        },
        reset() {
            initValue = init
            return initValue
        },
    }
}
