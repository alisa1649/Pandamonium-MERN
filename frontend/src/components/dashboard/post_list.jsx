import React from 'react';
import {createParentPost, requestParentPosts} from "../../actions/parent_post_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostList extends React.Component {
    componentDidMount() {
        this.props.requestParentPosts(this.props.forumId)
    }

    render() {
        return (
            <ul className='post-list'>
                {
                    this.props.parent_posts.map(post => {
                        return (
                            <li key={post._id} className='post-item-container'>
                                <Link to={`/thread/${post._id}`}>
                                    {post.text}
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
        parent_posts: Object.values(state.entities.parent_posts)
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestParentPosts: (forumId) => dispatch(requestParentPosts(forumId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
