import React from 'react';
import { Link } from "react-router-dom";
import {deleteParentPost} from "../../actions/parent_post_actions";
import { connect } from "react-redux";

class PostListItem extends React.Component {
    render() {
        const post = this.props.post;
        const editAction = this.props.editAction;
        const deleteAction = this.props.deleteAction;
        const belongsToUser = this.props.userId === post.user;

        return (
            <li className='post-item-container'>
                <Link to={`/thread/${post._id}`}>
                    {post.text}
                </Link>
                {
                    (belongsToUser && !!editAction)
                        ? <button onClick={() => editAction(post._id)}>Edit</button>
                        : ""
                }
                {
                    (belongsToUser && !!deleteAction)
                        ? <button onClick={() => deleteAction(post._id)}>Delete</button>
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
