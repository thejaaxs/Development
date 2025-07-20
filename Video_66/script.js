// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }

// console.log("Loading Modules");
// console.log("Do Something Else");
// console.log("Load Data");

// const data = getData();

// data.then(function (v) {
//     console.log(data);
//     console.log("Process Data");
//     console.log("Task 2");
// })

// console.log(data);
// console.log("Process Data");
// console.log("Task 2");


// The Use of Async And Await 

// async function getData1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }


// async function main() {
//     console.log("Loading Modules 1");
//     console.log("Do Something Else 1");
//     console.log("Load Data 1");

//     const data1 = await getData1();
//     console.log(data1);
//     console.log("Process Data 1");
//     console.log("Task 2 (1)");
// }

// main();

// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json));
//     // let data = await x.json();
//     let data = await x.text();
//     // console.log(data);
//     // return 455;
//     // return data ;
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.text();
    return data;
}
async function main() {
    console.log("Loading Modules");
    console.log("Do Something Else");
    console.log("Load Data");

    let data = getData();
    console.log(data);
    console.log("Process Data");
    console.log("Task 2");
}

main();