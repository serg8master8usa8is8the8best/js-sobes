function debounce(func, wait) {
    let timeoutId

    return function (...args) {
        // Сохраняем контекст вызова
        const context = this

        // Очищаем предыдущий таймер
        clearTimeout(timeoutId)

        // Устанавливаем новый таймер
        timeoutId = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}
