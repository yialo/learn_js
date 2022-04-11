class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head = null;
  length = 0;

  unshift(value) {
    this.head = new ListNode(value, this.head);
    this.length++;
    return this.length;
  }

  shift() {}

  removeValue() {}

  iterate() {}

  findIndex() {}
}
