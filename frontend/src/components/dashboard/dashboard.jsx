import React from 'react';
import NewPostForm from './new_post_form';
import PostList from './dashboard_post_list_container';
import {createParentPost, updateParentPost} from '../../actions/parent_post_actions';
import { getCurrentUserInfo } from '../../actions/user_actions';
import { connect } from 'react-redux';
import EditPostModal from "./edit_post_modal";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalVisible: false,
        };
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

        return (
            <div className="dashboard">
                {this.state.editModalVisible ? (
                    <EditPostModal
                        post={this.state.editModalPost}
                        closeAction={() => this.setState({ editModalVisible: false })}
                        submitAction={(post) => {
                            return this.props.updatePost(post)
                        }}
                    />
                ) : (
                    ''
                )}
                <h2>
                    Current Location: {this.props.currentUser.city}, {this.props.currentUser.state}
                </h2>
                <NewPostForm currentUser={this.props.currentUser} createPost={createPost} />
                <PostList requestId={forumId} editAction={(post)=>this.setState({ editModalVisible: true, editModalPost: post })} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.session.user.id,
    currentUser: state.entities.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createParentPost(post)),
    getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
    updatePost: (post) => dispatch(updateParentPost(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
