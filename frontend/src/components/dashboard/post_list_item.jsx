import React from 'react';
import { Link } from 'react-router-dom';
import { deleteParentPost } from '../../actions/parent_post_actions';
import { connect } from 'react-redux';
import { getOtherUserInfo } from '../../actions/user_actions';

class PostListItem extends React.Component {
    componentDidMount() {
        this.props.getOtherUserInfo(this.props.post.user);
        debugger;
    }
    render() {
        const post = this.props.post;
        const editAction = this.props.editAction;
        const deleteAction = this.props.deleteAction;
        const belongsToUser = this.props.currentUserId === post.user;
        const author = this.props.users.author;
        if (!post || !author) {
            return <div>No posts found</div>;
        }
        return (
            <li className="post-item-container">
                <div className="post-profile-pic">
                    {post.user}
                    <img src={author.image_path} alt="profile-pic" />
                </div>
                <Link to={`/thread/${post._id}`}>{post.text}</Link>
                {belongsToUser && !!editAction ? <button onClick={() => editAction(post._id)}>Edit</button> : ''}
                {belongsToUser && !!deleteAction ? <button onClick={() => deleteAction(post._id)}>Delete</button> : ''}
            </li>
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
