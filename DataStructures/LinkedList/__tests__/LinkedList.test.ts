import LinkedList from "../LinkedList";
import LinkedListNode from "../LinkedListNode";

describe("LinkedList", () => {
  it("should create an empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
  });

  it("should append nodes", () => {
    const linkedList = new LinkedList();
    linkedList.append("Hello");
    linkedList.append(", ");
    linkedList.append("World!");

    let current: LinkedListNode = linkedList.head;
    let nodes = [];

    while (current) {
      nodes.push(current.value);
      current = current.next;
    }

    expect(nodes[0]).toBe("Hello");
    expect(nodes[1]).toBe(", ");
    expect(nodes[2]).toBe("World!");
    expect(linkedList.tail.next).toBeNull();
  });

  it("should print nodes in order as a single string", () => {
    const linkedList = new LinkedList();
    linkedList.append("Hello");
    linkedList.append(", ");
    linkedList.append("World!");

    expect(linkedList.toString()).toBe("Hello, World!");
  });

  it("should find first instance of a node by value", () => {
    const linkedList = new LinkedList();
    linkedList.append("Hello");
    linkedList.append(", ");
    linkedList.append("World!");

    let found = linkedList.findFirst(", ");

    expect(found.value).toBe(", ");
  });

  it("should insert a node after a given value", () => {
    let linkedList = new LinkedList();
    linkedList.append("Hello");
    linkedList.append(", ");
    linkedList.append("World!");

    linkedList.insertAfter(",", "Cruel ");
    expect(linkedList.toString()).toBe("Hello, World!");

    linkedList.insertAfter(", ", "Cruel ");

    expect(linkedList.toString()).toBe("Hello, Cruel World!");
  });

  it("should delete first occurrence a given value", () => {
    let linkedList = new LinkedList();
    linkedList.append("Hello");
    linkedList.append(", ");
    linkedList.append("World!");

    linkedList.delete(", ");
    expect(linkedList.toString()).toBe("HelloWorld!");
  });
});
