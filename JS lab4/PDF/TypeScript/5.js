var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        var currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    };
    BinaryTree.prototype.search = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    };
    BinaryTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinaryTree.prototype.removeNode = function (currentNode, value) {
        if (!currentNode) {
            return null;
        }
        if (value === currentNode.value) {
            if (!currentNode.left && !currentNode.right) {
                return null;
            }
            else if (!currentNode.left) {
                return currentNode.right;
            }
            else if (!currentNode.right) {
                return currentNode.left;
            }
            else {
                var minValueNode = this.findMinNode(currentNode.right);
                currentNode.value = minValueNode.value;
                currentNode.right = this.removeNode(currentNode.right, minValueNode.value);
                return currentNode;
            }
        }
        else if (value < currentNode.value) {
            currentNode.left = this.removeNode(currentNode.left, value);
            return currentNode;
        }
        else {
            currentNode.right = this.removeNode(currentNode.right, value);
            return currentNode;
        }
    };
    BinaryTree.prototype.findMinNode = function (node) {
        if (!node.left) {
            return node;
        }
        return this.findMinNode(node.left);
    };
    BinaryTree.prototype.update = function (oldValue, newValue) {
        var node = this.findNode(this.root, oldValue);
        if (node) {
            node.value = newValue;
        }
    };
    BinaryTree.prototype.findNode = function (currentNode, value) {
        if (!currentNode) {
            return null;
        }
        if (value === currentNode.value) {
            return currentNode;
        }
        else if (value < currentNode.value) {
            return this.findNode(currentNode.left, value);
        }
        else {
            return this.findNode(currentNode.right, value);
        }
    };
    BinaryTree.prototype.getHeight = function () {
        return this.calculateHeight(this.root);
    };
    BinaryTree.prototype.calculateHeight = function (node) {
        if (!node) {
            return 0;
        }
        var leftHeight = this.calculateHeight(node.left);
        var rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
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
