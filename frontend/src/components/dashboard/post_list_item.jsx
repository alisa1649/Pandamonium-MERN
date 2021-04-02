import React from 'react';
import { Link } from 'react-router-dom';
import { deleteParentPost } from '../../actions/parent_post_actions';
import { connect } from 'react-redux';
import { getOtherUserInfo } from '../../actions/user_actions';

class PostListItem extends React.Component {
    componentDidMount() {
        this.props.getOtherUserInfo(this.props.post.user);
    }
    render() {
        const post = this.props.post;
        const editAction = this.props.editAction;
        const deleteAction = this.props.deleteAction;

        const belongsToUser = this.props.currentUserId === post.user;

        let userId = post.user;
        const author = this.props.users[userId];

        if (!post || !author) {
            return <div>No posts found</div>;
        }
        return (
            <Link to={`/thread/${post._id}`}>
                <li className="post-item-container">
                    <div className="post-body">
                        <div id={author.img_bg_color} className="post-profile-pic">
                            <img src={author.image_path} alt="profile-pic" />
                        </div>
                        <div className="username-box">
                            {post.anonymity ? <p>Anonymous says</p> : <p>{author.username} says</p>}
                        </div>

                        <p>{post.text}</p>
                    </div>

                    {belongsToUser && !!editAction ? <button onClick={() => editAction(post._id)}>Edit</button> : ''}
                    {belongsToUser && !!deleteAction ? (
                        <button className="delete-button" onClick={() => deleteAction(post._id)}>
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
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
