class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value: T): boolean {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(currentNode: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!currentNode) {
      return null;
    }

    if (value === currentNode.value) {
      if (!currentNode.left && !currentNode.right) {
        return null;
      } else if (!currentNode.left) {
        return currentNode.right;
      } else if (!currentNode.right) {
        return currentNode.left;
      } else {
        const minValueNode = this.findMinNode(currentNode.right);
        currentNode.value = minValueNode.value;
        currentNode.right = this.removeNode(currentNode.right, minValueNode.value);
        return currentNode;
      }
    } else if (value < currentNode.value) {
      currentNode.left = this.removeNode(currentNode.left, value);
      return currentNode;
    } else {
      currentNode.right = this.removeNode(currentNode.right, value);
      return currentNode;
    }
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  update(oldValue: T, newValue: T): void {
    const node = this.findNode(this.root, oldValue);
    if (node) {
      node.value = newValue;
    }
  }

  private findNode(currentNode: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!currentNode) {
      return null;
    }

    if (value === currentNode.value) {
      return currentNode;
    } else if (value < currentNode.value) {
      return this.findNode(currentNode.left, value);
    } else {
      return this.findNode(currentNode.right, value);
    }
  }

  getHeight(): number {
    return this.calculateHeight(this.root);
  }

  private calculateHeight(node: TreeNode<T> | null): number {
    if (!node) {
      return 0;
    }

    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);

console.log(tree.search(3)); // true
console.log(tree.search(6)); // false

tree.remove(3);
console.log(tree.search(3)); // false

tree.update(5, 8);
console.log(tree.search(8)); // true

console.log(tree.getHeight()); // 3