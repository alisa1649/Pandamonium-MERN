import PostList from './post_list';
import { deleteParentPost, requestParentPosts, updateParentPost } from '../../actions/parent_post_actions';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        userId: state.session.user.id,
        parent_posts: Object.values(state.entities.parent_posts),
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestParentPosts: (forumId) => dispatch(requestParentPosts(forumId)),
    deletePost: (postId) => dispatch(deleteParentPost(postId)),
    // editPost: (post) => dispatch(updateParentPost(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
