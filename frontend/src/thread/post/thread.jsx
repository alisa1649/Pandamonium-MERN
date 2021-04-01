import React from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createComment, requestThread } from "../../actions/thread_actions";
import NewPostForm from "../../components/dashboard/new_post_form";

class Thread extends React.Component {

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
                                    <li key={comment._id} className='post-item-container'>
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
    userId: state.session.user.id,
    parentPost: state.entities.parent_posts[ownProps.match.params.postId],
    comments: Object.keys(state.entities.thread).length
        ? Object.values(state.entities.thread.comments)
        : []
});

const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    requestThread: (postId) => dispatch(requestThread(postId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
