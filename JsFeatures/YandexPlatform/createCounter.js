



export function createCounter(init) {
    

    return {
        value : init,
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
        }
    }
}; 