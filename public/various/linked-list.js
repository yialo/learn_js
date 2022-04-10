class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  length = 0;

  unshift(value) {
    this.head = new ListNode(value, this.head);
    this.length++;
    return this.length;
  }

  removeValue() {}

  iterate() {}

  findIndex() {}
}

const list = new LinkedList();
list.unshift('Bob');
list.unshift('Bull');

const output = document.createElement('pre');
output.textContent = JSON.stringify(list, null, 2);

const rootElement = document.getElementById('root');
rootElement.appendChild(output);
