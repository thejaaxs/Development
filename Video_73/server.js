console.log("Hello Node");

var slugify = require('slugify');

const a = slugify("Some String");
console.log(a);

const b = slugify("Some !@#$%^&*()String");
console.log(b);

// npm stands for the node package manager
// slug is used to remove the unwanted alphabets in the website ( url )
// we just used the slugify from the node package