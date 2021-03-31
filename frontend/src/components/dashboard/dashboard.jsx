import React from 'react';
import NewPostForm from "./new_post_form";
import PostList from "./post_list";
import {createParentPost} from "../../actions/parent_post_actions";
import {connect} from "react-redux";

class Dashboard extends React.Component {
    render() {
        const forumId = 1;
        const createPost = (post) => this.props.createPost(forumId, post);
        return (
            <div className='dashboard'>
                <h2>MIAMI</h2>
                <NewPostForm createPost={createPost} />
                <PostList />
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createParentPost(forumId, post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
