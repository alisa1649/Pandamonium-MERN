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

ForumSchema.add({
  city: {
      type: String,
      required: false
  },
  state: {
      type: String,
      required: false 
  },
})

module.exports = Forum = mongoose.model('Forum', ForumSchema);