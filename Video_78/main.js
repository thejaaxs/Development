const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// the use of middleware 

app.use((req,res,next)=>{
    console.log("MiddleWare-1")
    next()
})

// but when you comment out the next() , then the program stucks in between !

app.use((req,res,next)=>{
    console.log("MiddleWare-2")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/about', (req, res) => {
    res.send("Helo About !")
})

app.get('/contact', (req, res) => {
    res.send("Hello Contact !")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})