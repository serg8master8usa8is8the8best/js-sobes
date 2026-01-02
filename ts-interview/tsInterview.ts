

const X = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

interface Cobj {
    [key: string]: number
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}


// Partial 
// Делает все свойства не обязательными 

type MyPartial<Type> = {
    [Key in keyof Type]?: Type[Key]
}

interface User {
    id: number
    name: string
    email: string
}

const user: MyPartial<User> = {
    name: 'John'
}

// Omit
// Pick 


function updateEntity<T extends object>(
    entity: T,
    updates: Partial<T>
): T {
    return { ...entity, ...updates }
}

// Определяет функциональность утилитарного типа 
type Some<T, U extends keyof T> = { [key in U]: T[key] }

type User2 = {
    id: number
    number: string
    email: string
}

type UserPreview = Some<User, 'id' | 'name'>

// что выведет в констоль данный код
enum NUMBERS {
    ONE, //0
    TWO, // 1
    THREE // 2
}

console.log(NUMBERS.ONE)
// 0

// Чему будет равен тип U
type T = 'a' | 'b' | 'c'
type U = Extract<T, 'a' | 'b'>
// U = a
// пересечение

// чему будет раваен Answer
type ObjectType = {
    a: string
    b: boolean
}

type Answer = ObjectType['a']
// string



type Status = 'pay' | 'waiting_load' | 'in_workd'

type StatusWithBrackets = {
    [K in Status]: `[${K}]`
}[Status]

type StatusWithBrackets2 = `[${Status}]`

const val: StatusWithBrackets = '[waiting_load]'