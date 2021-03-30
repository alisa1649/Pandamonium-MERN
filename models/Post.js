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
  }, {
    timestamps: true
  })

  module.exports = Post = mongoose.model('Post', PostSchema);