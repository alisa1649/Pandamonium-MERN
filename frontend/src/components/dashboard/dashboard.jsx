import React from 'react';
import NewPostForm from './new_post_form';
import PostList from './dashboard_post_list_container';
import { createParentPost } from '../../actions/parent_post_actions';
import { getCurrentUserInfo } from '../../actions/user_actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentUserInfo();
    }
    render() {
        if (!this.props.currentUser) return <div>User not found</div>;
        const forumId = this.props.currentUser.forum;
        const createPost = (post) => {
            post.forum = forumId;
            post.user = this.props.userId;
            this.props.createPost(post);
        };
<<<<<<< HEAD
        return (
=======
        
            return (
>>>>>>> main
            <div className="dashboard">
                <h2>
                    Current Location: {this.props.currentUser.city}, {this.props.currentUser.state}
                </h2>
                <NewPostForm currentUser={this.props.currentUser} createPost={createPost} />
                <PostList requestId={forumId} />
            </div>
            );
    }
}

const mapStateToProps = (state) => ({
    userId: state.session.user.id,
    currentUser: state.entities.users.currentUser,
    forumPosts: state.session.forum
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createParentPost(post)),
    getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
