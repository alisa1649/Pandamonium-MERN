import React from 'react';
import { Link } from 'react-router-dom';
import { createNewVoteOnPost, deleteParentPost } from '../../actions/parent_post_actions';
import { connect } from 'react-redux';
import { getOtherUserInfo } from '../../actions/user_actions';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: this.props.post.votes,
            upvotes: [],
            downvotes: [],
            upvoteNum: 0,
            downvoteNum: 0,
        };
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }
    componentDidMount() {
        this.props.getOtherUserInfo(this.props.post.user);
    }
    handleUpvote(e) {
        e.preventDefault();
        debugger;
        this.props.voteAction(this.props.post._id, {
            userId: this.props.currentUserId,
            type: 'upvote',
        });
        debugger;
    }

    handleDownvote() {
        this.props.voteAction(this.props.post._id, {
            userId: this.props.currentUserId,
            type: 'downvote',
        });
    }

    render() {
        const post = this.props.post;
        const editAction = this.props.editAction;
        const deleteAction = this.props.deleteAction;
        const isParentPost = !post.parent;

        const belongsToUser = this.props.currentUserId === post.user;

        let userId = post.user;
        const author = this.props.users[userId];

        if (!post || !author) {
            return <div>No posts found</div>;
        }

        return (
            <Link to={isParentPost ? `/thread/${post._id}` : null}>
                <li className={this.props.klassName}>
                    <div className="post-body">
                        <div id={author.img_bg_color} className="post-profile-pic">
                            <img src={author.image_path} alt="profile-pic" />
                        </div>
                        <div className="post-details">
                            <div className="username-box">
                                {post.anonymity ? (
                                    <p>Anonymous says</p>
                                ) : (
                                    <p>
                                        <Link id="author-link" to={`/users/${author.id}`}>
                                            {author.username}{' '}
                                        </Link>
                                        says
                                    </p>
                                )}
                            </div>
                            <p>{post.text}</p>
                            <div className="vote-box">
                                <div
                                    className={this.isUpvoted ? 'pressed' : 'unpressed'}
                                    id="upvote"
                                    onClick={(e) => this.handleUpvote(e)}>
                                    <i className="fas fa-arrow-alt-circle-up"></i>
                                    <p>{this.state.upvoteNum}</p>
                                </div>
                                <div
                                    className={this.isDownvoted ? 'pressed' : 'unpressed'}
                                    id="downvote"
                                    // onClick={(e) => this.toggleDownvoteClick(e)}
                                >
                                    <i className="fas fa-arrow-alt-circle-down"></i>
                                    <p>{this.state.downvoteNum}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post-body-buttons">
                        {belongsToUser && !!editAction ? (
                            <button onClick={() => editAction(post._id)}>Edit</button>
                        ) : (
                            ''
                        )}
                        {belongsToUser && !!deleteAction ? (
                            <button className="delete-button" onClick={() => deleteAction(post._id)}>
                                Delete
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </li>
            </Link>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.user.id,
        users: state.entities.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOtherUserInfo: (userId) => dispatch(getOtherUserInfo(userId)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);
