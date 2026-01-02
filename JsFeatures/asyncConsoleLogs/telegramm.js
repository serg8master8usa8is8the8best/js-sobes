const database = {
    filterId: 'active',
    users: [
        {
            id: 'active',
            label: 'Active',
        },
        {
            id: 'inactive',
            label: 'Inactive',
        },
    ],
    getUsers: function () {
        return this.users.filter(function (user) {
            return user.id === this.filterId
        })
    }
}

    // console.log(database.getUsers())
    // Ответ - будет []
    // из-за обычной фукнции которая создает свой контекс - нужно заменить на стрелочную 



    (function () {
        f()

        f = function () {
            // console.log(1)
        }
    })()

function f() {
    // console.log(2)
}

f()

// отверь - 2. потом 1 из-за хостинга 

sleep(2000).then(() => {
    console.log(0)
})

console.log(1)

setTimeout(() => {
    console.log(2)
})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

console.log(5)

function myPromise() {
    abc().then((val) => {
        console.log(val)
        return myPromise()
    })
}

function abc() {
    return new Promise((resolve) => {
        resolve(6)
    })
}

myPromise()