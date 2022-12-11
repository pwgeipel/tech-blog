const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({})
            .then(commentData => (res.json.commentData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
});

module.exports = router;