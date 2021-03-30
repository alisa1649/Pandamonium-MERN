import React from 'react';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            bio: '',
        };
    }
    componentDidMount() {
        this.props.getCurrentUserInfo();
        debugger;
        this.setState({
            _id: this.props.currentUser._id,
            username: this.props.currentUser.username,
            bio: this.props.currentUser.bio,
        });
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
    }

    render() {
        debugger;
        return <div className="edit-profile-form"></div>;
    }
}

export default EditProfileForm;
