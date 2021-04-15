import React from 'react';

import PostListItem from './post_list_item';

class PostList extends React.Component {
    componentDidMount() {
        debugger;
        this.props.requestParentPosts(this.props.requestId);
        debugger;
    }

    render() {
        const sortedPosts = this.props.parent_posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        debugger;
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
