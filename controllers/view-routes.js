const router = require('express').Router()
const { User, Blog, Comment } = require('../models')

router.get('/', async (req, res) => {
    let blogs = await Blog.findAll()
    blogs = blogs.map(blog => blog.get({ plain: true }))
    res.render('home', { blogs })

    router.get('/blog/:id', (req, res) => {

    })

})

module.exports = router;