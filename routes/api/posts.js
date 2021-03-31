const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');


router.get('/forums/:forum_name', (req, res) => {
    Post.find({forum: req.params.forum_name})
        .sort({ date: -1 })
        .then(posts => {
          res.json(posts)
        })
        .catch(err => res.status(404).json({ nopostsfound: 'This forum has no posts at this time.' }));
});

router.get('/forums/:forum_id/:post_id', (req, res) => {
    Post.find({parent: req.params.parent_id})
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No sub-posts exist under this post.' }
        )
    );
});

router.post('/forums/:forum_id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newMainPost = new Post({
        text: req.body.text,
        user: req.user.id,
        forum: req.forum.id
      });
  
      newMainPost.save().then(post => res.json(post));
    }
});

router.post('/forums/:forum_id/:post_id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newPost = new Post({
        text: req.body.text,
        user: req.user.id,
        forum: req.forum.id,
        parent: req.parent.id
      });
  
      newPost.save().then(post => res.json(post));
    }
});

router.delete('/:id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.findByIdAndDelete(req.params.id, function(err, docs){
          if (err){
              console.log(err)
          }
          else{
              console.log("Deleted : ", docs);
          })
        };
    }
});

module.exports = router;