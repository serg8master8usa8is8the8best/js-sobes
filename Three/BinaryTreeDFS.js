// 104. Maximum Depth of Binary Tree

// recur
var maxDepth = function (root) {
    if (!root) return 0

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1

};


// stach
var maxDepth = function (root) {
    if (!root) return 0

    let stack = [[root, 1]]

    let result = 0

    while (stack.length) {
        let [node, depth] = stack.pop()
        if (!node) continue

        result = Math.max(result, depth)
        stack.push([node.right, depth + 1])
        stack.push([node.left, depth + 1])

    }

    return result
};

var invertTree = function (root) {
    if (!root) return null

    let temp = root.right
    root.right = root.left
    root.left = temp
    invertTree(root.right)
    invertTree(root.left)

    return root
};


var invertTree = function (root) {

    if (!root) return null

    let stack = [root]

    while (stack.length) {
        let node = stack.pop()

        // Меняем местами левое и правое поддерево
        let temp = node.right
        node.right = node.left
        node.left = temp

        // Добавляем в стек только существующие дочерние узлы
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }

    return root

};