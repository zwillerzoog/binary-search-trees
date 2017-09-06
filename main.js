'use strict';

console.log('hiee');

class BinaryTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  
  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinaryTree(key, value, this)
        } else {
            this.left.insert(key, value)
        }
    } else {
        if (this.right === null) {
            this.right = new BinaryTree(key, value, this);
        } else if (key > this.key) {
            this.right.insert(key, value);
        }
    }
  }
}

let tree = new BinaryTree();

tree.insert(3, 'treees')
tree.insert(4, 'four!')
tree.insert(7, 'seven!')
tree.insert(2, '2!');
console.log(tree);
