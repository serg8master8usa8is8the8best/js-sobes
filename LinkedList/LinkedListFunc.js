
// Класс узла списка
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// middleNode
function middleNode(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// deleteMiddle
function deleteMiddle(head) {
  if (head.next === null) {
    return null;
  }

  let fast = head.next.next;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
}

// reverseList
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }

  return prev;
}

// getMiddle
function getMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// reverceList (как в Go, оставлен тот же нейминг)
function reverceList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }

  return prev;
}

// isPalindrome
function isPalindrome(head) {
  const middle = getMiddle(head);
  let reverced = reverceList(middle);

  let left = head;
  while (left !== null && reverced !== null) {
    if (left.val !== reverced.val) {
      return false;
    }
    left = left.next;
    reverced = reverced.next;
  }

  return true;
}

// removeNthFromEnd
function removeNthFromEnd(head, n) {
  if (head === null || head.next === null) {
    return null;
  }

  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast === null) {
    // В Go‑версии это не обрабатывается явно, но в JS так безопаснее.
    // Если хочешь строго как в Go, можно убрать этот if.
    return head.next;
  }

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}

// swapPairs
function swapPairs(head) {
  const dummy = new ListNode(0, head);

  let prev = dummy;
  let curr = head;

  while (curr !== null && curr.next !== null) {
    // save ptrs
    const nxtPair = curr.next.next;
    const second = curr.next;

    // reverse this pair
    second.next = curr;
    curr.next = nxtPair;
    prev.next = second;

    // update ptrs
    prev = curr;
    curr = nxtPair;
  }

  return dummy.next;
}

// mergeTwoLists
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }

  if (p1 !== null) {
    curr.next = p1;
  }

  if (p2 !== null) {
    curr.next = p2;
  }

  return dummy.next;
}