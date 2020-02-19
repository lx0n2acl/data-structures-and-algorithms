import TreeNode from "./treeNode";

const privateMethods = {
  insert(currentNode: TreeNode, nodeToInsert: TreeNode) {
    if (nodeToInsert.value < currentNode.value) {
      if (currentNode.leftChild === null) {
        currentNode.leftChild = nodeToInsert;
        console.log(`inserting ${nodeToInsert.value} into left child of ${currentNode.value}`);
        return;
      }
      this.insert(currentNode.leftChild, nodeToInsert);
    } else {
      if (currentNode.rightChild === null) {
        currentNode.rightChild = nodeToInsert;
        console.log(`inserting ${nodeToInsert.value} into right child of ${currentNode.value}`);
        return;
      }
      this.insert(currentNode.rightChild, nodeToInsert);
    }
  }
};

export default class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  insertChild(value: number) {
    let n: TreeNode = new TreeNode(value);

    if (this.root === null) {
      this.root = n;
    } else {
      privateMethods.insert(this.root, n);
    }
  }

  printTree() {
    //while
  }
}
