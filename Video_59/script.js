console.log("Hello World !");

// To access the Child Nodes 
// document.body.childNodes ;
// TextNode will be the first -> Space !

// To Access the first Child 

let cont = document.body.childNodes[1];

// First Child 
cont.firstChild;

// Last Child
cont.lastChild;

// To Access the First Element Child 

cont.firstElementChild;

cont.lastElementChild;

// To get Parent Node 

cont.childNodes[1].parentElement;


document.body.firstElementChild
// < div class=​"container" >​…​</div >

document.body.firstElementChild.childNodes
// NodeList(13)[text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
// HTMLCollection(5)[div.box, div.box, div.box, div.box, div.box]

// next Element Sibling 

document.body.firstElementChild.nextElementSibling;

// Previous Element Sibling 

document.body.firstElementChild.previousElementSibling;