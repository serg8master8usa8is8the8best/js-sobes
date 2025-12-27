function Cat() {
    this.name = 'cat'

    this.getNameArrow = () => {
        console.log(this.name)
    }

    this.getName = function () {
        console.log(this.name)
    }

}

const cat = new Cat()

cat.getName.call({name: 'test'})
cat.getNameArrow.call({name: 'test'})

const {getName, getNameArrow} = cat

getName.call({name: 'dsfasdf'}) // undef
getNameArrow.call({name: 'test'})



// // конструктор и класс 
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
    
//     greet() {
//         console.log(`Hello, I'm ${this.name}`)
//     }
// }

// // То же самое через конструктор
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, I'm ${this.name}`)
// }