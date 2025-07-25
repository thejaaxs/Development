function filterProducts(products, criterion) {
    return products.filter(product => {
        for (let key in criterion) {
            if (product.key !== criterion.key) return false;
        }
        return true;
    })
}
let products = [{
    Name: "Face Cream",
    key: 15050,
    Manufacturer: "Himalaya"
},
{
    Name: "Hair Oil",
    key: 2050,
    Manufacturer: "Ponds"
}]

console.log(filterProducts(products, { key: 2050 }));

// The Token Manager

function setAuthToken(token) {
    const expiration = Date.now() + (24 * 60 * 60 * 1000);
    // localStorage.setItem("Auth-Token", JSON.stringify(
    // { token, Expires: expiration }
    // ))
    // console.log(expiration);
}
// console.log(setAuthToken(100));

// The Shopping Cart Totalizer 

function calculateTotal(cart) {
    return cart.reduce((total, item) =>
        total + (item.price * item.quantity), 0);
}

let cart = [{
    name: "FaceCream",
    price: 100,
    quantity: 5
}, {
    name: "HairCream",
    price: 200,
    quantity: 2
}, {
    name: "Shampoo",
    price: 100,
    quantity: 1
}];

console.log(calculateTotal(cart));

// The Window Scroller

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    });
}
smoothScrollToTop();