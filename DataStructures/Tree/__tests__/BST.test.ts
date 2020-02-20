import BinarySearchTree, { PrintType } from "../bst";

describe("Binary Search Tree Insert", () => {
  it("should insert nodes in correct order", () => {
    const bst = new BinarySearchTree();

    bst.insertChild(1);
    bst.insertChild(4);
    bst.insertChild(3);
    bst.insertChild(2);

    console.log(JSON.parse(JSON.stringify(bst)));

    let bstExpected = {
      root: {
        leftChild: null,
        rightChild: {
          leftChild: { leftChild: { leftChild: null, rightChild: null, value: 2 }, rightChild: null, value: 3 },
          rightChild: null,
          value: 4
        },
        value: 1
      }
    };
    expect(bst).toEqual(bstExpected);
  });
  it("should print in order", () => {
    const bst = new BinarySearchTree();

    bst.insertChild(1);
    bst.insertChild(4);
    bst.insertChild(3);
    bst.insertChild(2);

    bst.print(PrintType.inOrder, bst.root);
    // expect(bst).toEqual(bstExpected);
  });
  it("should print in pre order", () => {
    const bst = new BinarySearchTree();

    bst.insertChild(1);
    bst.insertChild(4);
    bst.insertChild(3);
    bst.insertChild(2);

    bst.print(PrintType.preOrder, bst.root);
    // expect(bst).toEqual(bstExpected);
  });
  it("should print in post order", () => {
    const bst = new BinarySearchTree();

    bst.insertChild(1);
    bst.insertChild(4);
    bst.insertChild(3);
    bst.insertChild(2);

    bst.print(PrintType.postOrder, bst.root);
    // expect(bst).toEqual(bstExpected);
  });
});
