const express = require('express')
const app = express()
const port = 3000

// The app.use can be made to make the file visible
app.use(express.static('public')) // this should be a folder !

// This is either app.get or app.put or app.post or app.delete (path , handler)
app.get('/', (req, res) => {
    res.send('Hello World - 2!')
})

app.get('/about', (req, res) => {
    res.send("Hello About Us !")
})

app.get('/contact', (req, res) => { 
    res.send("Hello Contact !");
})

app.get('/Blog', (req, res) => {
    res.send("Hello Blog !");
})

app.get('/Blog/:slug',(req,res)=>{
    res.send(`Hello ${req.params.slug}`)
})

app.get('/About/:slug/:second',(req,res)=>{
    // Request Parameter is so big 
    console.log(req)
    console.log(req.params) // This Returns slug:Intro-to-mongoose
    console.log(req.query) // Mode : dark And region : in
    res.send(`Hello ${req.params.slug} And Hello ${req.params.second}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
