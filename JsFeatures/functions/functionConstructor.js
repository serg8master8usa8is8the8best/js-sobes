

function Book(name, author) {
    this.name = name
    this.author = author
}

function Foo(template, ...args) {
    return new template(...args)
}

const myBook = Foo(Book, 'JS book', "Sergey")

console.log(myBook)
console.log(myBook instanceof Book)