// Print Right-Angled Triangle of Stars

let num = 4;

for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
        // Use the process.stdout.write() to print in one single line
        process.stdout.write("* ");
    }
    console.log();
}

// Using a Function 

function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
printTriangle(4);

// Using Function & method 

function printRightAngledTriangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
printRightAngledTriangle(5);