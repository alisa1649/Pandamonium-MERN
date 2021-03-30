const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Forum = require('../../models/Forum');


router.get('/forums/:forum_id', (req, res) => {
    Forum.find({forum: req.params.forum_id})
        .then(forum => res.json(forum))
        .catch(err => res.status(404).json({ noforumfound: 'This forum does not exist.' }));
});

router.post('/forums/new', (req, res) => {
  
      const newForum = new Forum({
        name: req.body.name,
      });
  
      newForum.save().then(forum => res.json(forum));
});

module.exports = router;