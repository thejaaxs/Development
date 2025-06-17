console.log("Welcome To The Third Javascript Tutorial !");

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Thejas",
    age: 21,
    role: "Software Engineer"
};

for (let key in obj) {
    console.log(key, obj[key]);
}

for (const ch of "Thejas") {
    console.log(ch);
}

// While Loop 

let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

// Do - While Loop 

let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 5);