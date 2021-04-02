import React from 'react';

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.currentTarget.value,
        });
    }

    handleSubmit() {
        this.props.createPost(this.state);
    }

    render() {
        const { currentUser } = this.props;
        if (!currentUser) {
            return <div>You're not logged in!</div>;
        }
        return (
            <form className="new-post-box" onSubmit={this.handleSubmit}>
                <div id={currentUser.img_bg_color} className="post-user-avatar">
                    <img src={currentUser.image_path} />
                </div>
                <textarea onChange={this.handleChange} value={this.state.text}></textarea>
                <input type="submit" className="post-box-button" value="Post" />
            </form>
        );
    }
}

export default NewPostForm;
