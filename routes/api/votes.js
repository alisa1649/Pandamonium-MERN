const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateVotes = require('../../validation/votes');
const Vote = require('../../models/Vote');

router.get('/:post_id/votes', (req, res) => {
    Vote.find({ post: req.params.post_id })
        .then((votes) => res.json(votes))
        .catch((err) => res.status(404).json({ nopostvotes: 'Post not found' }));
});

router.post('/:post_id/votes', (req, res) => {
    const { errors, isValid } = validateVotes(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    //if a vote by that user on that post already exists, delete it.

    Vote.find({ user: req.body.user, post: req.params.post_id })
        .then((vote) => {
            console.log('vote', vote);
            if (vote[0]) {
                Vote.findOneAndDelete({ user: vote[0].user, post: vote[0].post }, (error) => {
                    if (error) console.log(error);
                    else console.log('delete successful');
                });
                // console.log('deleting vote');
            }
            console.log('create new vote');
            const newVote = new Vote({
                user: req.body.user,
                post: req.params.post_id,
                type: req.body.type,
            });
            newVote
                .save()
                .then((vote) => res.json(vote))
                .catch((err) => console.log(err));
            console.log('newvote', newVote);
        })
        .catch();
    //empty catch to prevent error.
    //create new vote
});
module.exports = router;
