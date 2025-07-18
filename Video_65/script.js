console.log("Harry is a Hacker");
console.log("Rohan is a Hecker");

setTimeout(function () {
    console.log("Im inside a setTimeout !");
}, 1000);

// Even if the setTimeout is for 0 seconds , the Javascript will first run entire script and then execute setTimeout ~
// Asynchronus Nature of Javascript !
setTimeout(function () {
    console.log("Im inside a setTimeout 2 !")
}, 0)
console.log("The End !");

// Pyramid of Doom 
// Callbacks inside callbacks 

const fn = () => {
    console.log("Nothing !");
}
let callback = (def, fn) => {
    console.log(def);
    fn();
}

let loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// callback is something but , passing the functions like a variable