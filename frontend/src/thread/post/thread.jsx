import React from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createComment, requestThread } from "../../actions/thread_actions";
import NewPostForm from "../../components/dashboard/new_post_form";

class Thread extends React.Component {

    componentDidMount() {
        if (this.props.parentPost) {
            this.props.requestThread(
                this.props.parentPost.forumId,
                this.props.parentPost.id);
        }
    }

    render() {
        const createComment = (comment) => this.props.createComment(this.props.parentPost, comment);
        if (this.props.parentPost) {
            console.log(this.props.comments)
            return (
                <div>
                    <NewPostForm createPost={createComment} />
                    <div>
                        <Link to='/dashboard'>Back to Dashboard</Link>
                    </div>
                    <div className='post-item-container'>
                        {this.props.parentPost.text}
                    </div>
                    <ul className='post-list'>
                        {
                            this.props.comments.map(comment => {
                                return (
                                    <li key={comment.id} className='post-item-container'>
                                        {comment.text}
                                    </li>
                                )
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
    parentPost: state.entities.parent_posts[ownProps.match.params.postId],
    comments: Object.keys(state.entities.thread).length
        ? Object.values(state.entities.thread.comments)
        : []
});

const mapDispatchToProps = (dispatch) => ({
    createComment: (parentPost, comment) => dispatch(createComment(parentPost, comment)),
    requestThread: (forumId, postId) => dispatch(requestThread(forumId, postId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
