const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');
const validateVotes = require('../../validation/votes');
const { post } = require('./forums');

router.get('/forums/:forum_id', (req, res) => {
    Post.find({ forum: req.params.forum_id })
        .sort({ createdAt: 'desc' })
        .then((posts) => res.json(posts))
        .catch((err) => res.status(404).json({ nopostsfound: 'This forum has no posts at this time.' }));
});

router.get('/:parent_id', (req, res) => {
    Post.find({ parent: req.params.parent_id })
        .sort({ createdAt: 'asc' })
        .then((posts) => res.json(posts))
        .catch((err) => res.status(404).json({ nopostsfound: 'There are no sub-posts at this time.' }));
});

// create a new post in a forum
router.post('/new', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        user: req.body.user,
        forum: req.body.forum,
        anonymity: req.body.anonymity,
    });

    newPost.save().then((post) => res.json(post));
});

// create a sub-post under a main post
router.post('/new/:parent_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        user: req.body.user,
        forum: req.body.forum,
        parent: req.body.parent,
        anonymity: req.body.anonymity,
    });

    newPost.save().then((post) => res.json(post));
});

// delete individual post
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    let id = req.params.id;

    Post.findByIdAndDelete(id)
        .then(() => res.json('Post deleted!'))
        .catch((err) => res.status(400).json(err));

    Post.deleteMany({ parent: id }).then(() => res.json('Post deleted!'));
});

// edit a post
router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    let updates = req.body;

    Post.findByIdAndUpdate({ _id: req.params.id }, updates, { new: true })
        .then((updatedPost) => res.json(updatedPost))
        .catch((err) => res.status(400).json(err));
});

router.get('/users/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
        .where({ anonymity: false })
        .sort({ createdAt: 'desc' })
        .then((posts) => res.json(posts))
        .catch((err) => res.status(404).json({ nopostscount: "This user doesn't appear to have any posts" }));
});

router.post('/:postId/vote', (req, res) => {
    const { errors, isValid } = validateVotes(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Post.findOne({ _id: req.params.postId })
        .then((post) => {
            if (post.votes.get(req.body.userId) === req.body.type) {
                post.votes.delete(req.body.userId);
            } else {
                post.votes.set(req.body.userId, req.body.type);
            }

            post.save();
            return post;
        })
        .then((response) => res.json(response))
        .catch((err) => res.status(400).json({ error: 'Error' }));
});

module.exports = router;
