function render(msg) {
    console.log(msg);
}

function createMessageHandler() {

    let bufer = new Map()
    let currentNumber = 1

    return function ({ id, text }) {

        bufer.set(id, text)

        while (bufer.has(currentNumber)) {
            render(bufer.get(currentNumber))

            bufer.delete(id)

            ++currentNumber
        }
    }

}


const onMessage = createMessageHandler();
onMessage({ id: 1, text: "hi" }); // рендерится сразу
onMessage({ id: 3, text: "how are u" }); // в буфере
onMessage({ id: 2, text: "yo" }); // триггерит рендер 2 и 3
onMessage({ id: 5, text: "yo" }); // ждёт 4
onMessage({ id: 4, text: "yo" }); // триггерит рендер 4 и 5