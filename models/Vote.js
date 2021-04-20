const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
    type: {
        type: String,
        enum: ['upvote', 'downvote'],
        required: true,
    },
});

VoteSchema.index({ user: 1, post: 1 }, { unique: true });

module.exports = Vote = mongoose.model('Vote', VoteSchema);
