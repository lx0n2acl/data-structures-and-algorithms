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

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  toString() {
    let iterator: LinkedListNode = this.head;
    let str = "";

    console.log("to string: ", iterator.value)
    console.log("to string 2: ", iterator.next)

    while (iterator.next != null) {
      str += iterator.value;
      iterator = iterator.next;
    }

    str += iterator.value;

    return str;
  }
}