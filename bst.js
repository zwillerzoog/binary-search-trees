const BST = require('./main.js');

const bst = new BST();

bst.insert(4,'number four');
bst.insert('E', 'The first letter');
bst.insert('A', 'The first letter to the left');
// bst.insert(S, 'The first letter to the right');
// bst.insert(Y, 'The second letter to the right');


// Draw a BST that results when you insert the keys - E A S Y Q U E S T I O N
// Implement a BST and compare your result
console.log(bst);

