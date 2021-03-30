import React from 'react';
import NewPostForm from "./new_post_form";
import PostList from "./post_list";

class Dashboard extends React.Component {
    render() {
        return (
            <div className='dashboard'>
                <h2>MIAMI</h2>
                <NewPostForm />
                <PostList />
            </div>
        );
    }
}

export default Dashboard;
