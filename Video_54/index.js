console.log("Hey Thejas , welcome to Strings in Javascript !");
let a = "Thejas";
console.log(a);
// Access Characters 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);
let real_name = "Thejas";
let friend = "Akash";

console.log("His Name is " + real_name + " & his Friend's Name is " + friend);

// Using Template Literals 

console.log(`His Name is ${real_name} & his Friend's Name is ${friend}`);

let b = "ShiVaM";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

console.log(b.slice(1, 4)); // 4 is excluded 
console.log(b.slice(1));

console.log(b.replace("Sh", "777"));

console.log(b);
console.log(b.concat(a));
console.log(b.concat(a, "Priya"));

let d = " Thejas ";
console.log(d.trim());


let n = "Thejas";
console.log(n.charAt(2));
console.log(n.indexOf("j"));
console.log(n.startsWith("R"));
console.log(n.startsWith("T"));
