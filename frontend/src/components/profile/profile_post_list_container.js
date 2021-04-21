import PostList from '../dashboard/post_list';
import { deleteParentPost, requestUsersParentPosts, createNewVoteOnPost } from '../../actions/parent_post_actions';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        parent_posts: Object.values(state.entities.parent_posts),
        klassName: 'profile-post-item',
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestParentPosts: (userId) => dispatch(requestUsersParentPosts(userId)),
    deletePost: (postId) => dispatch(deleteParentPost(postId)),
    // editPost: (post) => dispatch(updateParentPost(post)),
    voteAction: (postId, vote) => dispatch(createNewVoteOnPost(postId, vote)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
