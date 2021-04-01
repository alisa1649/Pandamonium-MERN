import React from 'react';
import {deleteParentPost, requestParentPosts} from "../../actions/parent_post_actions";
import { connect } from "react-redux";
import PostListItem from "./post_list_item";

class PostList extends React.Component {
    componentDidMount() {
        this.props.requestParentPosts(this.props.forumId)
    }

    render() {
        return (
            <ul className='post-list'>
                {
                    this.props.parent_posts.map(post =>
                        <PostListItem key={post._id} post={post} deleteAction={this.props.deletePost} />
                    )
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.session.user.id,
        parent_posts: Object.values(state.entities.parent_posts)
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestParentPosts: (forumId) => dispatch(requestParentPosts(forumId)),
    deletePost: (postId) => dispatch(deleteParentPost(postId))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
