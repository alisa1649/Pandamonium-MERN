import React from 'react';
import { Redirect } from 'react-router-dom';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            bio: '',
            redirect: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getCurrentUserInfo();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentUser && !prevState.id) {
            debugger;
            this.setState({
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                bio: this.props.currentUser.bio,
            });
        }
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let userInfo = {
            username: this.state.username,
            bio: this.state.bio,
        };
        this.props.editCurrentUserInfo(userInfo);
        this.setState({
            redirect: true,
        });
    }

    render() {
        debugger;
        if (this.state.redirect === true) {
            return <Redirect to="/profile" />;
        }
        return (
            <div className="edit-profile-form-container">
                <h2>Edit Your Profile</h2>
                <form className="edit-profile-form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>
                        Bio:
                        <textarea cols="30" rows="10" value={this.state.bio} onChange={this.update('bio')}></textarea>
                    </label>

                    <input type="submit" value="Edit Profile"></input>
                </form>
            </div>
        );
    }
}

export default EditProfileForm;
