let random = Math.random();
console.log(random);

let first, second, third;

if (random < 0.33)
    first = "Crazy";

else if (random < 0.66 && random > 0.33)
    first = "Amazing";

else
    first = "Fire";

random = Math.random();

if (random < 0.33)
    second = "Engine";

else if (random > 0.33 && random < 0.66)
    second = "Foods";

else
    second = "Garments";

random = Math.random();

if (random < 0.33)
    third = "Bros";

else if (random < 0.66 && random > 0.33)
    third = "Limited";

else
    third = "Hub";

console.log(`Result : ${first} ${second} ${third}`);