document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const error = document.getElementById("formError");
    if (!name || !email) {
        error.textContent = "Both Fields Are Mandatory !";
    }
    else {
        error.textContent = "Submitted Successfully !";
    }
});