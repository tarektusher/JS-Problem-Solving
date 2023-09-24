
//? Write a JavaScript program to add items at starting position
const node = document.createElement('li');
const nodeItem = document.createTextNode('JavaScript.JS');
node.appendChild(nodeItem);
const myList = document.getElementById('myList');
myList.insertBefore(node,myList.children[0]);


//? Write a JS program to move a ITEM form one list to another list
const element = document.getElementById('myList2').lastElementChild;
document.getElementById('myList1').appendChild(element);
