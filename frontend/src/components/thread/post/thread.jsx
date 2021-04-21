import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {createComment, deleteComment, requestThread, updateComment} from '../../../actions/thread_actions';
import NewPostForm from '../../dashboard/new_post_form';
import PostListItem from '../../dashboard/post_list_item';
import EditPostModal from '../../dashboard/edit_post_modal';
import { deleteParentPost, updateParentPost, createNewVoteOnPost } from '../../../actions/parent_post_actions';
import { getCurrentUserInfo } from '../../../actions/user_actions';
import { createNewVoteOnComment } from '../../../actions/thread_actions';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalVisible: false,
        };
    }

    componentDidMount() {
        if (this.props.parentPost) {
            this.props.requestThread(this.props.parentPost._id);
        }
        this.props.getCurrentUserInfo();
    }

    render() {
        const forumId = '6064e15dbc30e7788b2fb300';
        const createComment = (comment) => {
            comment.forum = forumId;
            comment.parent = this.props.parentPost._id;
            comment.user = this.props.userId;
            this.props.createComment(comment);
        };
        if (this.props.parentPost) {
            return (
                <div className="thread-container">
                    {this.state.editModalVisible ? (
                        <EditPostModal
                            post={this.state.editModalPost}
                            closeAction={() => this.setState({ editModalVisible: false })}
                            submitAction={(post) => post.parent
                                ? this.props.updateComment(post)
                                : this.props.updateParentPost(post)}
                        />
                    ) : (
                        ''
                    )}
                    <div>
                        <Link to="/dashboard">Back to Dashboard</Link>
                    </div>
                    <PostListItem
                        post={this.props.parentPost}
                        editAction={(post) => this.setState({ editModalVisible: true, editModalPost: post })}
                        deleteAction={this.props.deleteParentPost}
                        klassName="post-item-container"
                        voteAction={this.props.parentVoteAction}
                    />
                    <ul className="post-list">
                        {this.props.comments.map((comment) => {
                            return (
                                <PostListItem
                                    key={comment._id}
                                    post={comment}
                                    deleteAction={this.props.deleteComment}
                                    editAction={(post) => this.setState({ editModalVisible: true, editModalPost: post })}
                                    klassName="post-item-container"
                                    voteAction={this.props.voteAction}
                                />
                            );
                        })}
                        <li>
                            <NewPostForm
                                currentUser={this.props.currentUser}
                                createPost={createComment}
                                parentPost={this.props.parentPost}
                            />
                        </li>
                    </ul>
                </div>
            );
        } else {
            return <Redirect to="/dashboard" />;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.user.id,
    parentPost: state.entities.parent_posts[ownProps.match.params.postId],
    comments: Object.keys(state.entities.thread).length ? Object.values(state.entities.thread.comments) : [],
    currentUser: state.entities.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    updateParentPost: (post) => dispatch(updateParentPost(post)),
    deleteParentPost: (postId) => dispatch(deleteParentPost(postId)),
    createComment: (comment) => dispatch(createComment(comment)),
    requestThread: (postId) => dispatch(requestThread(postId)),
    deleteComment: (postId) => dispatch(deleteComment(postId)),
    getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
    updateComment: (post) => dispatch(updateComment(post)),
    voteAction: (postId, vote) => dispatch(createNewVoteOnComment(postId, vote)),
    parentVoteAction: (postId, vote) => dispatch(createNewVoteOnPost(postId, vote)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
