// Дана вложенная структура файлов и папок.

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

/*
Нужно вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
*/

/*
Пример вывода:
folder
  file1.txt
  file2.txt
  images
    image.png
    vacation
      crocodile.png
      penguin.png
  shopping-list.pdf
*/

function renderPrint(root, level) {
    const indent = '  '.repeat(level);
    console.log(indent + root.name);

    // Если есть дети, обрабатываем их с увеличенным уровнем
    if (root.children) {
        for (let child of root.children) {
            renderPrint(child, level + 1); // level + 1, а не ++level
        }
    }
}

function printFileTree(root) {
    // todo

    renderPrint(root, 1)
}

printFileTree(data);