// This is to do it manually 

document.getElementById("1").style.backgroundColor = "red";
document.getElementById("2").style.backgroundColor = "green";
document.getElementById("3").style.backgroundColor = "blue";
document.getElementById("4").style.backgroundColor = "violet";
document.getElementById("5").style.backgroundColor = "yellow";

// Each time to change 

const boxes = document.querySelector(".container").children;

function getRandomColor() {
    let var1 = Math.ceil(0 + Math.random() * 255);
    let var2 = Math.ceil(0 + Math.random() * 255);
    let var3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${var1},${var2},${var3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})