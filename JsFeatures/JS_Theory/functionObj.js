const obj = {
    name: 'Emap',
    getName() {
        // ordinary function 
        return this.name
    },
    delayedGetName1() {
        setTimeout(function () {
            console.log('1', this.getName())
            // ошибка ибо контекст не связан
        }, 1000)
    },
    delayedGetName2() {
        setTimeout(() => console.log('2', this.getName()), 2000)
        // выведет 2 Epam ибо возьмет this из выше по контексту через dot натацию 
    }


}


// исправленная версия 

const obj2 = {
    name: 'Emap',
    getName() {
        // ordinary function 
        return this.name
    },
    delayedGetName1() {
        setTimeout(function (obj) {
            console.log('1', obj.getName())
            // связывает контекст 
        }, 1000, this)
    },
    delayedGetName2() {
        setTimeout(() => console.log('2', this.getName()), 2000)
        // выведет 2 Epam ибо возьмет this из выше по контексту через dot натацию 
    }
}


obj2.delayedGetName1()
obj2.delayedGetName2()

// console.log(obj.getName())