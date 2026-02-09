const data = {
    name: "folder",
    children: [
        { name: "file1.txt" },
        { name: "file2.txt" },
        {
            name: "images",
            children: [
                { name: "image.png" },
                {
                    name: "vacation",
                    children: [{ name: "crocodile.png" }, { name: "penguin.png" }],
                },
            ],
        },
        { name: "shopping-list.pdf" },
    ],
};

function returnFolderView(three) {

    if (!three || three === null || typeof three !== 'object') {
        console.log('data is not a object')
    }

    const stack = [[three, 1]]

    while (stack.length !== 0) {
        let [node, level] = stack.pop()

        console.log(' '.repeat(level), node.name)

        if (node?.children?.length) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push([node.children[i], level + 1])
            }
        }
    }
}

console.log(returnFolderView(data))