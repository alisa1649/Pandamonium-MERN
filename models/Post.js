const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { VoteSchema } = require('./Vote.js');

const PostSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        forum: {
            type: Schema.Types.ObjectId,
            ref: 'Forum',
        },
        parent: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    },
    {
        timestamps: true,
    }
);

PostSchema.add({
    anonymity: {
        type: Boolean,
        default: false,
    },
});

PostSchema.add({
    votes: {
        type: Map,
        of: String,
        default: new Map(),
    },
});
module.exports = Post = mongoose.model('Post', PostSchema);
