const button = document.getElementById("btn");

// Single Click
button.addEventListener("click", function () {
    // alert("I was Clicked . Yayy !");
    document.querySelector(".box").innerHTML = "<b>Yess you have been clicked ! </b>Congratulations !";
})

// Double Click
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Double Click Successfull !</b>";
})

// Right Click ( contextmenu )
button.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right Click !");
})

// Keydown ( When a button is pressed )
button.addEventListener("keydown", (e) => {
    console.log(e);
})

document.addEventListener("keydown", (e) => {
    console.log(e);
})

// To get the key and the keyCode
document.addEventListener("keydown", function (e) {
    console.log(e.key, e.keyCode);
})