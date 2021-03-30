import React from 'react';
import {createPost} from "../../actions/post_actions";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

class Thread extends React.Component {
    render() {
        if(this.props.parentPost) {
            return (
                <div>
                    <div>
                        <Link to='/dashboard'>Back to Dashboard</Link>
                    </div>
                    <div>
                        {this.props.parentPost.body}
                    </div>
                </div>
            );
        }
        else {
            return <Redirect to='/dashboard' />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    parentPost: state.posts[ownProps.match.params.postId],
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createPost(forumId, post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
