const tree = {
    type: 'nested',
    children: [
        { type: 'added', value: 42 },
        {
            type: 'nested',
            children: [
                { type: 'added', value: 43 },
            ],
        },
        { type: 'added', value: 44 },
    ]
}


function returnAllNode(three, nodeType) {

    if (three === null || typeof three !== 'object' || !nodeType) {
        return []
    }

    let stack = [three]

    let result = []

    while (stack.length) {
        let node = stack.pop()

        if (node.type === nodeType) {
            result.push({
                type: nodeType,
                value: node.value
            })
        }

        if (node?.children?.length) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i])
            }
        }
    }

    return result

}

console.log(returnAllNode(tree, 'added'))