import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  head: any;
  tail: any;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAfter(targetValue, value) {
    let current = this.findFirst(targetValue);

    if (!current) return;

    let next = current.next;
    current.next = new LinkedListNode(value);
    current.next.next = next;
  }

  findFirst(value): LinkedListNode {
    let current: LinkedListNode = this.head;

    while (current) {
      if (current.value === value) return current;

      current = current.next;
    }

    return null;
  }

  delete(value) {
    let current: LinkedListNode = this.head;
    let previous = null;

    // find node, hold on to previous
    while (current) {
      if (current.value === value) break;

      previous = current;
      current = current.next;
    }

    // if deleting the first element
    if (!previous) {
      this.head = current.next;
      return;
    }

    previous.next = current.next;
  }

  toString() {
    let current: LinkedListNode = this.head;
    let str = "";

    while (current) {
      str += current.value;
      current = current.next;
    }

    return str;
  }
}
