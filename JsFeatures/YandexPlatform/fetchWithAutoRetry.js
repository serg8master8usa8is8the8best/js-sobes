export async function fetchWithAutoRetry(fetcher, count) {
    return new Promise((resolve, reject) => {
        function tryToFetch(currentCount) {
            fetcher()
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    if (currentCount <= count) {
                        tryToFetch(++currentCount)
                    } else {
                        reject(err)
                    }
                })
        }

        tryToFetch(1)
    })
}
