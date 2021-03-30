import React from 'react';
import {createPost} from "../../actions/post_actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostList extends React.Component {
    render() {
        return (
            <ul className='post-list'>
                {
                    this.props.posts.map(post => {
                        return (
                            <li key={post.id} className='post-item-container'>
                                <Link to={`/thread/${post.id}`}>
                                    {post.body}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts)
    }
};

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createPost(forumId, post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
