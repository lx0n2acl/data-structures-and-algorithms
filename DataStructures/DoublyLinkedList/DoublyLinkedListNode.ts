export default class LinkedListNode {
  value: string;
  next: LinkedListNode;
  prev: LinkedListNode;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
