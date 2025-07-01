let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}

console.log();
// For Each with objects

let obj = {
    a: 1,
    b: 2,
    c: 3
};
for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}