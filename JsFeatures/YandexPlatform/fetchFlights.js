// функция поиска вариантов перелетов из точки
function fetchFlights(from) {}

// Например, для
graph = { A: [B, D], B: [C, N, Z], D: [E, F], F: [S] }

findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])
findPath('A', 'S', fetchFlights) // Promise.resolve(['A', 'D', 'F', 'S'])
findPath('B', 'S', fetchFlights) // Promise.reject(new Error('No way'))
// Функция поиска составного авиабилета
async function findPath(from, to, fetchFlights) {
    const queue = [from]
    const routes = new Map()

    routes.set(from, [from])

    while (queue.length > 0) {
        const node = queue.pop()

        const neighbors = await fetchFlights(node)

        if (!neighbors) continue

        const currentRoute = routes.get(node)

        for (const neighbor of neighbors) {
            if (!routes.has(neighbor)) {
                queue.push(neighbor)
            }

            routes.set(neighbor, node)

            if (to === neighbor) {
                let startPoint = routes.get(neighbor)

                if (!startPoint) return Promise.resolve([to])

                let result = [to, startPoint]

                while (startPoint !== from) {
                    startPoint = routes.get(startPoint)
                    result.push(startPoint)
                }

                return Promise.resolve(routes.get(result.reverse()))
            }
        }
    }

    return Promise.reject('no way')
}
