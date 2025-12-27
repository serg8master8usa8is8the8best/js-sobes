// Узел списка
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Односвязный список
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Добавить в начало
  prepend(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Добавить в конец
  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // Поиск по значению, возвращает узел или null
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Удаление по значению, возвращает true/false
  remove(value) {
    if (!this.head) return false;

    // если удаляем голову
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (!current.next) {
      return false; // не нашли
    }

    // пропускаем удаляемый узел
    current.next = current.next.next;
    this.size--;
    return true;
  }

  // Преобразовать в массив (удобно для тестов)
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  // Вывести в консоль
  print() {
    console.log(this.toArray().join(" -> ") + " -> null");
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print();         // 5 -> 10 -> 20 -> null
console.log(list.find(10)); // ListNode { value: 10, next: ... }
list.remove(10);
list.print();         // 5 -> 20 -> null
console.log("size =", list.size);