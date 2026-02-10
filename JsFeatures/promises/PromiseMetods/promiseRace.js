// возвращает первый успешный или провальный промис

// проходимся по промисам - и оборачиваем их
// можно использовать then c 2 аргументами для data и err
// можно сделать return для завершения функции 

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            reject('no promises')
            return
        }

        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(
                    (data) => resolve(data),  // Первый успех разрешает основной промис
                    (err) => reject(err)      // Первая ошибка отвергает основной промис
                );

        });
    })
}