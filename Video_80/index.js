const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", "10", "100"]
    res.render('index', { siteName: siteName, searchText: searchText, arr })
    // res.send("Hello World !")
    // res.sendFile("templates/index.html", { root: __dirname })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidad Why And When ?"
    let blogContent = "It's a Very Good Brand"
    // res.sendFile("templates/blogPost.html", { root: __dirname })
    res.render('blogPost', { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})