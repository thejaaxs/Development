console.log("Hello World");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[1].style.backgroundColor = "green";

document.getElementById("red").style.backgroundColor = "red";

// Only for the first element 

// document.querySelector(".box").style.backgroundColor = "yellow";

// For all the elements 

// document.querySelectorAll(".box").style.backgroundColor = "green"; //  will not work 

// Use for.Each

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "yellow";
})

// To get by the tag Name

document.getElementsByTagName("div");

// Matches

e = document.getElementsByTagName("div");
e[4].matches("#redbox"); // returns true or false 

// To get the closest Ones of Parents 

e[4].closest("container");

// If it contains or not !

document.querySelector("box").contains(e[2]);