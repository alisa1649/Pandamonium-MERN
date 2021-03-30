const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    name: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
})

module.exports = Forum = mongoose.model('Forum', ForumSchema);