const Validator = require('validator');

module.exports = function validateVotes(data) {
    let voteTypes = ['upvote', 'downvote'];
    let errors = {};
    if (!Validator.contains(voteTypes, data.type)) {
        errors.text = 'This is not a valid reaction';
        return {
            errors,
            isValid: false,
        };
    } else {
        return {
            errors,
            isValid: true,
        };
    }
};
