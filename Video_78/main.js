const express = require('express')
const fs = require('fs')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog',blog)

// the use of middleware 
// adding a fs file to the text file

app.use((req, res, next) => {
    console.log(req.headers)
    req.Thejas = "I Am Thejas";
    fs.appendFileSync("Thejas.txt", `${Date.now()} is a ${req.method}\n`)
    // console.log(`${Date.now()} is a ${req.method}`)
    // console.log("MiddleWare-1")
    next() // Commenting this makes the program end !
})

// but when you comment out the next() , then the program stucks in between !

app.use((req, res, next) => {
    // res.send("Hacked By MiddleWare 2"); // the program stops after this point !
    req.Thejas = "I am Rahul"; // this will be printed !
    console.log("MiddleWare-2")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/about', (req, res) => {
    res.send("Helo About ! " + `Its me ${req.Thejas}`)
})

app.get('/contact', (req, res) => {
    res.send("Hello Contact !")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})