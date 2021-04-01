import React from 'react';

class EditPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.post.text
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.currentTarget.value
        })
    }

    handleSubmit() {
        const newPost = Object.assign({}, this.props.post, this.state)
        this.props.submitAction(newPost);
        this.props.closeAction();
    }

    render() {
        return (
            <div className="modal-background" onClick={this.props.closeAction}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <form className='new-post-box' onSubmit={this.handleSubmit}>
                        <div className='post-user-avatar'> </div>
                        <textarea onChange={this.handleChange}>{this.state.text}</textarea>
                        <input type='submit' className='post-box-button' value='Post' />
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPostModal;
