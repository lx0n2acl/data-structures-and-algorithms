import BinarySearchTree from "../bst";

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
});
