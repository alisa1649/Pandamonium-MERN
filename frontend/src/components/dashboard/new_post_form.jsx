import React from 'react';

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            anonymity: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleAnonymous = this.toggleAnonymous.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.currentTarget.value,
        });
    }

    handleSubmit() {
        this.props.createPost(this.state);
        this.setState({
            text: "",
        });
    }

    toggleAnonymous() {
        this.state.anonymity = !this.state.anonymity;
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
                <div className="new-post-middle">
                    <div className="anonymous-box">
                        <label>
                            Check to post anonymously
                            <input type="checkbox" id="anonymous-checkbox" onChange={() => this.toggleAnonymous()} />
                        </label>
                    </div>
                    <textarea onChange={this.handleChange} value={this.state.text}></textarea>
                </div>
                <input type="submit" className="post-box-button" value="Post" />
            </form>
        );
    }
}

export default NewPostForm;
