const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
// const validatePostInput = require('../../validation/posts');


router.get('/forums/:forumName/posts', (req, res) => {
    Post.find({forum: req.params.forumName})
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'This forum has no posts at this time.' }));
});

router.get('/forums/:forumName/:postId', (req, res) => {
    Post.find({forum: req.params.forumName}, {post: req.params.postId})
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No such post exists.' }
        )
    );
});



  module.exports = router;