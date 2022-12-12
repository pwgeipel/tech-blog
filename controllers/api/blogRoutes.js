const router = require('express').Router();
const withAuth = require('../../utils/authentication');
const { Blog } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newBlog = await Blog.create({ ...body, userId: req.session.userId});
        res.json(newBlog);
    } catch (err) {
        console.log('Failure to create new blog post.', err);
        res.status(500).json(err)
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        const blogData = Blog.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (!blogData) {
            res.status(404).json({ message: 'Blog post with this id not found.' });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;