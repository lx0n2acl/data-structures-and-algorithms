import TreeNode from "./treeNode";

const privateMethods = {
  insert(currentNode: TreeNode, nodeToInsert: TreeNode) {
    if (nodeToInsert.value < currentNode.value) {
      if (currentNode.leftChild === null) {
        currentNode.leftChild = nodeToInsert;
        //console.log(`inserting ${nodeToInsert.value} into left child of ${currentNode.value}`);
        return currentNode.leftChild;
      }
      this.insert(currentNode.leftChild, nodeToInsert);
    } else {
      if (currentNode.rightChild === null) {
        currentNode.rightChild = nodeToInsert;
        //console.log(`inserting ${nodeToInsert.value} into right child of ${currentNode.value}`);
        return currentNode.rightChild;
      }
      this.insert(currentNode.rightChild, nodeToInsert);
    }
  }
};

export enum PrintType {
  inOrder,
  preOrder,
  postOrder
}

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
  print(type: PrintType, node?: TreeNode) {
    if (node) {
      if (type === PrintType.inOrder) {
        this.print(type, node.leftChild);
        console.log("inOrder print: ", node.value);
        this.print(type, node.rightChild);
      }
      if (type === PrintType.preOrder) {
        console.log("preOrder print: ", node.value);
        this.print(type, node.leftChild);
        this.print(type, node.rightChild);
      }
      if (type === PrintType.postOrder) {
        this.print(type, node.leftChild);
        this.print(type, node.rightChild);
        console.log("postOrder print: ", node.value);
      }
    }
  }
}
