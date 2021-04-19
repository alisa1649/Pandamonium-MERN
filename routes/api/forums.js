const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Forum = require('../../models/Forum');


router.get('/:id', (req, res) => {
    Forum.findById(req.params.id)
        .then(forum => res.json(forum))
        .catch(err => res.status(404).json({ noforumfound: 'This forum does not exist.' }));
});

router.post('/new', (req, res) => {
  
      const newForum = new Forum({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state
      });
  
      newForum.save().then(forum => res.json(forum));
});

module.exports = router;