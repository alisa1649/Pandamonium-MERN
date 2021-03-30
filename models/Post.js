const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    body: {
      type: String,
      required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    forum: {
        type: Schema.Types.ObjectId,
        ref: 'Forum'
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
  }, {
    timestamps: true
  })

  module.exports = Post = mongoose.model('Post', PostSchema);