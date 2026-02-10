/**
 * Нужно сделать эффект постепенного вывода текста.
 * Пример: https://yastatic.net/s3/taxi-front/tasks/task-matrix.html
 *
 * Напишите функцию typeWriter(delay, outputChar), возвращающую функцию writeText(text).
 * 
 * writeText(text) далее вызывается несколько раз в разные моменты времени и должна
 * вызывать outputChar поочерёдно для каждого символа строки text с задержкой в delay миллисекунд.
 * 
 * ['ab', 'cd', 'ef',...]
 * ['a', 'b', 'c', 'd']
 *
 *  writeText('ab')
 *  writeText('CD')     writeText('ef')         writeText('G') writeText('xy')
 *             │                   │                       │              │
 *             ▼       250ms       ▼         300ms         ▼     200ms    ▼
 *             ├───────┬───────┬───┴───┬───────┬───────┬───┴───┬──────────┼───────┐
 *             ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲  150ms   ▲ 100ms ▲
 *             │       │       │       │       │       │       │          │       │
 * outputChar('a')    'b'     'C'     'D'     'e'     'f'     'G'        'x'     'y'
 *
 *  
 * type OutputChar = (char: string) => void;
 * type WriteText = (text: string) => void;
 * function typeWriter(delay: number, outputText: OutputChar): WriteText;
 *
 * Решение должно быть максимально эффективным по сложности и «отпускать» ссылку на строку сразу же после того,
 * как последний символ строки был выведен.
 */

function typeWriter(delay, outputChar) {
    // your code here

    let stack = []

    let currentText = null;
    let currentIndex = 0;


    let timerId = null

    function asyncLogger() {
        if (!currentText) {
            currentText = stack.shift();
            currentIndex = 0;

            if (!currentText) {
                timerId = null;
                return;
            }
        }

        outputChar(currentText[currentIndex])
        currentIndex++;

        if (currentIndex === currentText.length) {
            currentText = null;
        }

        timerId = setTimeout(asyncLogger, delay)
    }

    return (text) => {

        stack.push(text)

        if (!timerId) {
            asyncLogger()
        }
    }
}

function runTest() {
    console.clear();

    let start = Date.now();

    function outputChar(char) {
        console.log(`${Date.now() - start}ms: ${char}`);
    }

    const writeText = typeWriter(100, outputChar);
    writeText('ab');
    writeText('CD');
    setTimeout(() => writeText('ef'), 250);
    setTimeout(() => writeText('G'), 550);
    setTimeout(() => writeText('xy'), 750);
}

runTest();