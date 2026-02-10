const FLIGHTS = {
    A: ['B', 'D'],
    B: ['C', 'N', 'Z'],
    D: ['E', 'F'],
    F: ['S']
};

const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);


// создаем stack из from, path

// пока есть stack берем из него элемент

// запрашиваем по нему путь

// пушим новый путь по элементу 

// если элемент тот, который нужен, то return 

async function findPath(from, to, fetchFlights) {
    if (from === to) {
        return [from]
    }

    const stack = [[from, [from]]]

    while (stack.length > 0) {
        const [from, path] = stack.pop()

        const destinations = await fetchFlights(from)

        if (destinations) {
            for (let destination of destinations) {

                const newPath = [...path, destination]

                if (destination == to) {
                    return newPath
                }

                stack.push([destination, newPath])
            }
        }
    }

    return []
}

findPath('A', 'S', fetchFlights).then((data) => console.log(data))