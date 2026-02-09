// 1
var foo = 1

function bar() {
    // хоститься foo, но он равен undefined
    if (!foo) {
        var foo = 10 // затиняется внутринним foo
    }
    console.log(foo)
}
bar() // 10

// 2
var a = 1
function b() {
    // всплывает и хоститься функция
    a = 10
    // переприсваивается значение для функции
    return
    function a() {}
}
b()
console.log(a) // 1
