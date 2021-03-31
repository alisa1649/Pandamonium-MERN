const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');


router.get('/forums/:forum_id/posts', (req, res) => {
    Post.find({forum: req.params.forum_id})
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'This forum has no posts at this time.' }));
});

router.get('/forums/:forum_id/:postId', (req, res) => {
    Post.find({forum: req.params.forum_id}, {post: req.params.postId})
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No such post exists.' }
        )
    );
});


// create a new post in a forum
router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newPost = new Post({
        text: req.body.text,
        user: req.user.id,
        forum: req.forum.id
      });
  
      newPost.save().then(post => res.json(post));
    }
);


// create a sub-post under a main post
// router.post('/forums/:forum_id/:parent_id', (req, res) => {
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validatePostInput(req.body);
        
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
  
//       const newPost = new Post({
//         text: req.body.text,
//         user: req.user.id,
//         forum: req.forum.id,
//         parent: req.parent.id
//       });
  
//       newPost.save().then(post => res.json(post));
//     }
// });


// delete individual post
router.delete('/:id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        let id = Post.findById(req.params.id);
        Post.findOneAndDelete({ _id: id });
    }
});

module.exports = router;