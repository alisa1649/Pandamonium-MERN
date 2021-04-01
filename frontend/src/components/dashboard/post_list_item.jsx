import React from 'react';
import { Link } from "react-router-dom";
import {deleteParentPost} from "../../actions/parent_post_actions";
import { connect } from "react-redux";

class PostListItem extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <li className='post-item-container'>
                <Link to={`/thread/${post._id}`}>
                    {post.text}
                </Link>
                {
                    (this.props.userId === post.user)
                        ? <button onClick={() => this.props.deleteAction(post._id)}>Delete</button>
                        : ""
                }
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.session.user.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);
