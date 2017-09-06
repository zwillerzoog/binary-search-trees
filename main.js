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
        this.left = new BinaryTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(key, value, this);
      } else if (key > this.key) {
        this.right.insert(key, value);
      }
    }
  }

  get(key) {
    if (key === this.key) {
      //   console.log('first stop', key);
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.get(key);
      //   console.log('next stop');
    }
    else if (key > this.key && this.right) {
      return this.right.get(key);
      //   console.log('second stop', key);
      //   console.log('third stop', this.key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (key === this.key) {
      if (this.left && this.right) {
        const successcor = this.right._findMin();
        this.key = successcor.key;
        this.value = successcor.value;
        successcor.remove(successcor.key);
      }
      else if (this.left) {
          this.left._replaceWith();
      }
      else if (this.right) {
          this.right._replaceWith();
      }
      else {
          _replaceWith = null; 
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
}

let tree = new BinaryTree();

tree.insert(3, 'treees');
tree.insert(4, 'four!');
tree.insert(7, 'seven!');
tree.insert(2, '2!');
console.log(tree.get(4));
console.log(tree);
