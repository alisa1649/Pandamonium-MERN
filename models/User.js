const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: {
        type: String,
        required: false
    }
  }, {
    timestamps: true
  })

  UserSchema.add({
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false 
    },
  })

  UserSchema.add({
    forum: {
        type: Schema.Types.ObjectId,
        ref: 'Forum'
    }
  })

  UserSchema.add({
    image_path: {
      type: String,
      default: "/panda.png"
    },
    img_bg_color: {
      type: String,
      default: "rainbow"
    }
  })
  module.exports = User = mongoose.model('User', UserSchema);