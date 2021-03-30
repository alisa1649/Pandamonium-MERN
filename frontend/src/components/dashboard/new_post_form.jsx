import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../../actions/post_actions";

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }

    render() {
        return (
            <form className='new-post-box' onSubmit={() => this.props.createPost(1, this.state)}>
                <div className='post-user-avatar'> </div>
                <textarea onChange={this.handleChange}>{this.state.body}</textarea>
                <input type='submit' className='post-box-button' value='Post' />
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    createPost: (forumId, post) => dispatch(createPost(forumId, post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
