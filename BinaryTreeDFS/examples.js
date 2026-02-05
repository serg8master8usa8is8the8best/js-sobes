// базовая рекурсия

function f(n) {
    if (n === 0) return
    f(n - 1)
    console.log(n)
}

// f(5)

// DFS  Depth First Search

//     1
//    2 3
//  4 5  6 7

// O(n) по времени
// O(n) по памяти

function dfs(node) {
    if (!node) return

    // pre order 1 2 4 5 3 6 7
    dfs(node.left)
    // in order 4 2 5 1 6 3 7
    dfs(node.right)
    // post order 4 5 2 6 7 3 1
}


function dfsStack(node) {
    stack.push(node)
    // last in first out 

    while (stack.length) {
        node = stack.pop()
        stack.push(node.right)
        stack.push(node.left)
        print(node.value)
    }
}

const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1, 5],
    5: [2, 4]
};

function dfsStack(graph, startNode, findNode) {
    const stack = [startNode]
    const visited = new Set()
    const result = []

    while (stack.length > 0) {
        const node = stack.pop()

        if (visited.has(node)) continue

        visited.add(node)
        result.push(node)

        const neighbors = graph[node] || []
        // в обратном порядке 
        for (let i = neighbors.length - 1; i >= 0; i--) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i])
                console.log(stack)
            }

        }
    }

    return result
}

console.log(dfsStack(graph, 0))