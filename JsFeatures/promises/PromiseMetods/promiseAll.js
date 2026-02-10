
// если пустой массив резолвим
// создаем массив с длинной
// каждый промис обарачиваем и считаем только успешные count 
// если есть хоть один reject, то завершаем его с ошибкой 


function myPromiseAll(promises) {
    // Возвращаем новый промис
    return new Promise((resolve, reject) => {
        // Если передали пустой массив - сразу резолвим
        if (!promises || promises.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(promises.length);
        let completedCount = 0;

        // Обрабатываем каждый элемент массива
        promises.forEach((promise, index) => {
            // Оборачиваем в Promise.resolve() на случай,
            // если передали не промис (например, число или строку)
            Promise.resolve(promise)
                .then((value) => {
                    // Сохраняем результат в правильной позиции
                    results[index] = value;
                    completedCount++;

                    // Если все промисы завершились - резолвим результат
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // Если хотя бы один промис отклонён - сразу реджектим
                    reject(error);
                });
        });
    });
}