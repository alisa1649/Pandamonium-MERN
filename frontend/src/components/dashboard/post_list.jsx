import React from 'react';
import { createNewVoteOnPost } from '../../actions/parent_post_actions';

import PostListItem from './post_list_item';

class PostList extends React.Component {
    componentDidMount() {
        this.props.requestParentPosts(this.props.requestId);
    }

    render() {
        const sortedPosts = this.props.parent_posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        
        if (sortedPosts.length < 1) {
            return (
                <div className='emptyForumMessage'>
                    <div className="empty-forum-panda-container">
                        <img src="/emptyForum_panda.png"/>
                    </div>
                </div>
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
                        editAction={this.props.editAction}
                        voteAction={this.props.voteAction}

                    />
                ))}
            </ul>
        );
    }
}

export default PostList;
