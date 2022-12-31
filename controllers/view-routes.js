const router = require('express').Router()
const { User, Blog, Comment } = require('../models')

router.get('/', async (req, res) => {
    try {    
        let blogs = await Blog.findAll()
        blogs = blogs.map(blog => blog.get({ plain: true }))
        res.render('home', { blogs })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', async (req, res) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        blog = blog.get({ plain: true })

        res.render('blog', { blog })
        
    } catch(err) {
        res.status(500).json(err)
    }    
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;