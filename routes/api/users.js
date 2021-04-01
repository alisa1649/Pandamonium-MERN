const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');


router.post('/signup', (req, res) => {

  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already signed up with this address" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          bio: req.body.bio,
          city: req.body.city,
          state: req.body.state
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This account does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, username: user.username };

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
    bio: req.user.bio,
    city: req.body.city,
    state: req.body.state,
    image_path: req.user.image_path,
    img_bg_color: req.user.img_bg_color
  });
})

router.patch('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  let _id = req.user.id;
  let newUsername = req.body.username;
  let newBio = req.body.bio;
  let newCity = req.body.city;
  let newState = req.body.state;
  let newImgPath = req.body.image_path;
  let newImgColor = req.body.img_bg_color;
  
  User.findByIdAndUpdate({_id}, {

    username: newUsername, 
    bio: newBio,
    city: newCity,
    state: newState,
    image_path: newImgPath,
    img_bg_color: newImgColor
  },
  ).then(result => res.send(result)).catch((err) => res.send(err))
})

module.exports = router;