const express = require('express')
const mongoose = require('mongoose')
const Employee = require("./models/employee")

mongoose.connect("mongodb://localhost:27017/company")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send("Hello World !")
    res.render('index', { foo: 'FOO' });
})

let getRandom = (arr) => {
    let rNo = Math.floor((Math.random() * arr.length - 1));
    return arr[rNo];
}

app.get('/generate', async (req, res) => {

    await Employee.deleteMany({})
    
    let randomNames = ["Bhuvan", "Thruvan", "Mavan", "Shirvan", "Khuvan"]

    let randomCities = ["Bangalore", "Lucknow", "Mysore", "Kundapura", "Byndoor"]

    let randomLangs = ["Python", "PHP", "Java", "Javascript", "C++"]

    for (let i = 0; i < 10; i++) {

        let e = await Employee.create({
            Name: getRandom(randomNames),
            Salary: Math.ceil(Math.random() * 350000),
            Language: getRandom(randomLangs),
            City: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        })
    }
    res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
    console.log(`Example App Listening On Port ${port}`)
})

