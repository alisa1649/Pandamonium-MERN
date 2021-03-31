import React from 'react';
import { Redirect } from 'react-router-dom';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            bio: '',
            image_path: './panda.png',
            img_bg_color: 'white',
            redirect: false,
            selectedIdx: 0,
            imgArr: ['/panda.png', '/panda2.png', '/panda3.png', '/panda4.png'],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getCurrentUserInfo();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentUser && !prevState.id) {
            this.setState({
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                bio: this.props.currentUser.bio,
                image_path: this.props.currentUser.image_path,
                img_bg_color: this.props.currentUser.img_bg_color,
            });
        }
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    updateImage(field) {
        return (e) => {
            let newUrl = `/${e.currentTarget.src.split('/').pop()}`;

            this.setState({
                [field]: newUrl,
                selectedIdx: this.state.imgArr.indexOf(newUrl),
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let userInfo = {
            username: this.state.username,
            bio: this.state.bio,
            image_path: this.state.image_path,
            img_bg_color: this.state.img_bg_color,
        };
        this.props.editCurrentUserInfo(userInfo);
        this.setState({
            redirect: true,
        });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/profile" />;
        }

        return (
            <div className="edit-profile-form-container">
                <h2>Edit Your Profile</h2>
                <form className="edit-profile-form" onSubmit={this.handleSubmit}>
                    <div className="main-form-section">
                        <div className="left-half">
                            <label>
                                Username:
                                <input type="text" value={this.state.username} onChange={this.update('username')} />
                            </label>
                            <label>
                                Bio:
                                <textarea
                                    cols="30"
                                    rows="10"
                                    value={this.state.bio}
                                    onChange={this.update('bio')}></textarea>
                            </label>
                        </div>
                        <div className="right-half">
                            <div className="panda-pics-box">
                                <div className={this.state.selectedIdx === 0 ? 'panda-pic active' : 'panda-pic'}>
                                    <img
                                        id="OG-panda"
                                        src="/panda.png"
                                        alt="panda"
                                        onClick={this.updateImage('image_path')}
                                    />
                                </div>
                                <div className={this.state.selectedIdx === 1 ? 'panda-pic active' : 'panda-pic'}>
                                    <img src="/panda2.png" alt="panda" onClick={this.updateImage('image_path')} />
                                </div>
                                <div className={this.state.selectedIdx === 2 ? 'panda-pic active' : 'panda-pic'}>
                                    <img src="/panda3.png" alt="panda" onClick={this.updateImage('image_path')} />
                                </div>
                                <div className={this.state.selectedIdx === 3 ? 'panda-pic active' : 'panda-pic'}>
                                    <img src="/panda4.png" alt="panda" onClick={this.updateImage('image_path')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Edit Profile"></input>
                </form>
            </div>
        );
    }
}

export default EditProfileForm;
