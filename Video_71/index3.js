// The Asynchronus Shopper 

async function placeOrder(orderDetails) {
    const delay = Math.random() * 2000 + 1000;
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(`Order ${orderDetails.id} Confirmed !, Estimated Delivery in 3-5 Days !`)
        }, delay)
    )
}
let order = {
    id: 124500,
    name: "Sandesh",
    Address: "Mangalore"
}
let status = await placeOrder(order);
console.log(status);

// The Coffee Machine 

async function brewCoffee(coffeeType) {
    const delay = Math.random() * 3000 + 2000;
    return new Promise(resolve => {
        setTimeout(() =>
            resolve(`${coffeeType} is Ready !, Enjoy Your Coffee !`), delay)
    })
}

let ordered = await brewCoffee("Cappuchino");
console.log(ordered);

// Local Storage

function saveNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem("note") || []);
    notes.push(note);
    localStorage.setItem('Note', JSON.stringify(notes));
}