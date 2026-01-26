// функция поиска вариантов перелетов из точки
function fetchFlights(from) {}

// Например, для
graph = { A: [B, D], B: [C, N, Z], D: [E, F], F: [S] }

findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])
findPath('A', 'S', fetchFlights) // Promise.resolve(['A', 'D', 'F', 'S'])
findPath('B', 'S', fetchFlights) // Promise.reject(new Error('No way'))
// Функция поиска составного авиабилета

// Функция поиска составного авиабилета
async function findPath(from, to, fetchFlights) {
    const queue = [from]
    const routes = new Map()

    cons

    // Для стартовой точки маршрут - только она сама
    routes.set(from, [from])

    while (queue.length > 0) {
        const node = queue.shift() // Используем BFS (ширину)

        // Если достигли цели
        if (node === to) {
            return routes.get(node)
        }

        // Получаем соседние города из текущего узла
        const neighbors = await fetchFlights(node)

        if (!neighbors) continue

        for (const neighbor of neighbors) {
            // Если город еще не посещали
            if (!routes.has(neighbor)) {
                // Сохраняем маршрут до соседа
                routes.set(neighbor, [...routes.get(node), neighbor])
                // Добавляем в очередь для дальнейшего поиска
                queue.push(neighbor)
            }
        }
    }

    // Если путь не найден
    return Promise.reject(new Error('No way'))
}
