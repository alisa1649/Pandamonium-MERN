import React from 'react';

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit() {
        this.props.createPost(this.state);
    }

    render() {
        return (
            <form className='new-post-box' onSubmit={this.handleSubmit}>
                <div className='post-user-avatar'> </div>
                <textarea onChange={this.handleChange}>{this.state.body}</textarea>
                <input type='submit' className='post-box-button' value='Post' />
            </form>
        );
    }
}

export default NewPostForm;
