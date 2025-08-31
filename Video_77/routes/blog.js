const express = require('express')

const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }

// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Blog !')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`Fetch the Blogpost for ${req.params.slug}`);
})

module.exports = router
