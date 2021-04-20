import React from 'react';

import PostListItem from './post_list_item';

class PostList extends React.Component {
    componentDidMount() {
        this.props.requestParentPosts(this.props.requestId);
    }

    render() {
        const sortedPosts = this.props.parent_posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        
        if (sortedPosts.length < 1) {
            return (
                <div className='emptyForumMessage'>No active users here...try updating your location to Miami, FL, or Redwood City, CA (or login as a demo user to look around!)</div>
            )
        }
        return (
            <ul className="post-list">
                {sortedPosts.map((post) => (
                    <PostListItem
                        key={post._id}
                        post={post}
                        deleteAction={this.props.deletePost}
                        klassName={this.props.klassName}
                        // editAction={this.props.editPost}
                    />
                ))}
            </ul>
        );
    }
}

export default PostList;
