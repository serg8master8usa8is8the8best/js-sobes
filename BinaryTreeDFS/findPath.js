// DFS поиск с восстановлением пути
function dfsFindPath(graph, startNode, target) {
    const stack = [[startNode, [startNode]]]; // [текущая_вершина, путь_к_ней]
    const visited = new Set();

    while (stack.length > 0) {
        const [node, path] = stack.pop();

        if (visited.has(node)) continue;
        visited.add(node);

        // Если нашли цель
        if (node === target) {
            return {
                found: true,
                path: path,
                steps: path.length - 1 // количество шагов
            };
        }

        const neighbors = graph[node] || [];
        for (let i = neighbors.length - 1; i >= 0; i--) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor)) {
                stack.push([neighbor, [...path, neighbor]]);
            }
        }
    }

    return {
        found: false,
        path: [],
        steps: 0
    };
}

// Тестируем поиск пути
const result = dfsFindPath(graph, 0, 5);
console.log(result);
// {
//   found: true,
//   path: [0, 1, 4, 5], // Один из возможных путей
//   steps: 3
// }

console.log(dfsFindPath(graph, 0, 3));
// { found: true, path: [0, 1, 3], steps: 2 }

console.log(dfsFindPath(graph, 0, 6));
// { found: false, path: [], steps: 0 }