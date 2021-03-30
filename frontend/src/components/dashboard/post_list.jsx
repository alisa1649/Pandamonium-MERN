import React from 'react';
import {createPost} from "../../actions/post_actions";
import {connect} from "react-redux";

class PostList extends React.Component {
    render() {
        return (
            <ul className='post-list'>
                {
                    this.props.posts.map(post => {
                        return <li key={post.id}>{post.body}</li>
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: Object.values(state.posts)
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createPost(forumId, post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
