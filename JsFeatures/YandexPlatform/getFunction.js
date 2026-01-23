

function get(url, retries = 3) {
    return new Promise((resolve, reject) => {
        function attempt(attemptCount) {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('HTTP error ' + response.status);
                    }
                    return response.json();
                })
                .then(resolve)
                .catch((err) => {
                    if (attemptCount < retries) {
                        attempt(attemptCount + 1);
                    } else {
                        reject(err);
                    }
                });
        }

        attempt(1);
    });
}

get(url).then((res) => console.log(res)).catch(err => console.error(err))