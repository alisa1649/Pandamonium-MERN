const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateVotes = require('../../validation/votes');
const Vote = require('../../models/Vote');

// router.get('/:post_id/upvotes', (req, res) => {
//     Vote.find({ post: req.params.post_id })
//         .where({ type: 'upvote' })
//         .then((votes) => res.json(votes))
//         .catch((err) => res.status(404).json({ novotes: "this post doesn't have any upvotes" }));
// });

// router.get('/:post_id/downvotes', (req, res) => {
//     Vote.find({ post: req.params.post_id })
//         .where({ type: 'downvote' })
//         .then((votes) => res.json(votes))
//         .catch((err) => res.status(404).json({ novotes: "this post doesn't have any upvotes" }));
// });

router.get('/:post_id/votes', (req, res) => {
    Vote.find({ post: req.params.post_id })
        .then((votes) => res.json(votes))
        .catch((err) => res.status(404).json({ nopostvotes: 'Post not found' }));
});

module.exports = router;
