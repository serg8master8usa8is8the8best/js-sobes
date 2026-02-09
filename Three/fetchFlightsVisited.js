const FLIGHTS = {
    A: ['B', 'D'],
    B: ['C', 'N', 'Z'],
    D: ['E', 'F'],
    F: ['S']
};

const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);

async function findPath(from, to, fetchFlights) {
    if (from === to) return [from];

    const stack = [[from, [from]]];
    const visited = new Set([from]);

    while (stack.length > 0) {
        const [current, path] = stack.pop();

        try {
            const destinations = await fetchFlights(current);

            if (destinations) {
                for (const dest of destinations) {
                    if (!visited.has(dest)) {
                        visited.add(dest);
                        const newPath = [...path, dest];

                        console.log(dest, to, newPath)

                        if (dest === to) return newPath;

                        stack.push([dest, newPath]);
                    }
                }
            }
        } catch {
            // Пропускаем ошибки
        }
    }

    return [];
}

findPath('A', 'S', fetchFlights).then((data) => console.log(data))