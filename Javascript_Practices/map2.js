// Creating and Using a Map
// set , get , has

const myMap = new Map();

// Set the values 
myMap.set('Name', "Thejas");
myMap.set(1, "One");
myMap.set(true, "Yes");;

// getting values 
console.log(myMap.get("Name"));
console.log(myMap.get(1));
console.log(myMap.get(true));

// Check if key exists 
console.log(myMap.has(1));
console.log(myMap.has("Thejas"));

// Size of the key 
console.log(myMap.size);

// Delete the values 
myMap.delete(1);

// Iterating Over Map 

myMap.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

// Iterating Using Loops 

for (let [key, value] of myMap) {
    console.log(`${key} maps to ${value}`);
}