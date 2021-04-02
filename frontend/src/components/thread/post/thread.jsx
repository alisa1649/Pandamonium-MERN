import React from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {createComment, deleteComment, requestThread} from "../../actions/thread_actions";
import NewPostForm from "../../components/dashboard/new_post_form";
import PostListItem from "../../components/dashboard/post_list_item";
import EditPostModal from "../../components/dashboard/edit_post_modal";
import {updateParentPost} from "../../actions/parent_post_actions";

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalVisible: false
        }
    }

    componentDidMount() {
        if (this.props.parentPost) {
            this.props.requestThread(this.props.parentPost._id);
        }
    }

    render() {
        const forumId = '6064e15dbc30e7788b2fb300';
        const createComment = (comment) => {
            comment.forum = forumId;
            comment.parent = this.props.parentPost._id;
            comment.user = this.props.userId;
            this.props.createComment(comment);
        }
        if (this.props.parentPost) {
            return (
                <div>
                    {
                        this.state.editModalVisible
                            ? <EditPostModal
                                post={this.props.parentPost}
                                closeAction={() => this.setState({editModalVisible: false} )}
                                submitAction={(post) => this.props.updateParentPost(post)} />
                            : ""
                    }
                    <NewPostForm createPost={createComment}   />
                    <div>
                        <Link to='/dashboard'>Back to Dashboard</Link>
                    </div>
                    <PostListItem post={this.props.parentPost} editAction={() => this.setState({editModalVisible: true})}/>
                    <ul className='post-list'>
                        {
                            this.props.comments.map(comment => {
                                return <PostListItem key={comment._id} post={comment} deleteAction={this.props.deleteComment} />
                            })
                        }
                    </ul>
                </div>
            );
        }
        else {
            return <Redirect to='/dashboard' />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.user.id,
    parentPost: state.entities.parent_posts[ownProps.match.params.postId],
    comments: Object.keys(state.entities.thread).length
        ? Object.values(state.entities.thread.comments)
        : []
});

const mapDispatchToProps = (dispatch) => ({
    updateParentPost: (post) => dispatch(updateParentPost(post)),
    createComment: (comment) => dispatch(createComment(comment)),
    requestThread: (postId) => dispatch(requestThread(postId)),
    deleteComment: (postId) => dispatch(deleteComment(postId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
