import React from 'react';
import NewPostForm from "./new_post_form";
import PostList from "./post_list";
import { createParentPost } from "../../actions/parent_post_actions";
import { connect } from "react-redux";

class Dashboard extends React.Component {
    render() {
        const forumId = '6064e15dbc30e7788b2fb300';
        const createPost = (post) => {
            post.forum = forumId;
            post.user = this.props.userId;
            this.props.createPost(post)
        };
        return (
            <div className='dashboard'>
                <h2>MIAMI</h2>
                <NewPostForm createPost={createPost} />
                <PostList forumId={forumId} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.session.user.id
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createParentPost(post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
