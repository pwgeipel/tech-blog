const router = require('express').Router();
const withAuth = require('../../utils/authentication');
const { User, Blog, Comment } = require('../../models');
const bodyParser = require('body-parser');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create({ ...body, userId: req.session.userId});
        res.json(newBlog);

module.exports = router;