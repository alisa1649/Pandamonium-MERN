import React from 'react';
import {createParentPost} from "../../actions/parent_post_actions";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {requestThread} from "../../actions/thread_actions";

class Thread extends React.Component {

    componentDidMount() {
        if (this.props.parentPost) {
            this.props.requestThread(this.props.parentPost.id);
        }
    }

    render() {
        if(this.props.parentPost) {
            console.log(this.props.comments)
            return (
                <div>
                    <div>
                        <Link to='/dashboard'>Back to Dashboard</Link>
                    </div>
                    <div className='post-item-container'>
                        {this.props.parentPost.body}
                    </div>
                    <ul className='post-list'>
                        {
                            this.props.comments.map(comment => {
                                return (
                                    <li key={comment.id} className='post-item-container'>
                                        {comment.body}
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
    parentPost: state.parent_posts[ownProps.match.params.postId],
    comments: Object.keys(state.thread).length
        ? Object.values(state.thread.comments)
        : []
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createParentPost(forumId, post)),
    requestThread: (postId) => dispatch(requestThread(postId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
