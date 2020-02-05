import DoublyLinkedList from "../DoublyLinkedList";
import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe("Doubly LinkedList", () => {
  it("should create an empty doubly linked list", () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
  });
});
