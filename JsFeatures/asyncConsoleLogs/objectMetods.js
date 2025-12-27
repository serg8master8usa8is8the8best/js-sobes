function foo() {
    const x = 10

    return {
        x: 20,
        bar() {
            console.log(this.x)
        },
        baz: () => {
            console.log(this.x)
        },
    }
}

const obj1 = foo()

obj1.bar() // 20

obj1.baz() // undef

const obj2 = foo.call({x: 30})

let y = obj2.bar
let x = obj2.baz

// y.call({x: 1})
y() // undef
x() // 30

obj2.bar() // 20
obj2.baz() // 30 

