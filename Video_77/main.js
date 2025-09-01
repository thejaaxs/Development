const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop',shop)

// to check the get request , we can write in console !
app.get('/', (req, res) => {
    console.log("Hey This is a Get Request !");
    res.send('Hello World Get 2!')
})

// to show the post request , the only way to do is use public then look in browser console !
app.post('/', (req, res) => {
    console.log("This is a POST Request !");
    res.send("Hello World Post !");
})

app.put('/', (req, res) => {
    console.log("This is a PUT Request !");
    res.send("Hello World Put !");
})

// app.get("/index", (req, res) => {
//     console.log("Index");
//     res.send("Hello World Index !");
// })

app.get("/index", (req, res) => {
    res.sendFile('templates/index.html',{root:__dirname});
})

// Return api using res.json
app.get("/api",(req,res)=>{
    res.json({a:1,b:2,c:3,d:4,e:5,name:["Thejas","Rhejas"]});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// we can send postman collection to our friends