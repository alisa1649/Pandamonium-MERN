import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from '../googlemap/googlemap'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentUserInfo();
    }

    render() {
        const { currentUser } = this.props;
        if (!currentUser) {
            return <div>User not found</div>;
        }
        return (
            <div className="profile-page edit-profile-form-container">
                <div className="profile-header">
                    <div className="profile-pic" id={currentUser.img_bg_color}>
                        <img src={currentUser.image_path} alt="panda??" />
                    </div>
                    <h1>{currentUser.username}'s Profile</h1>
                </div>
                <form className="edit-profile-form">
                    <div className="main-form-section">
                        <div className="left-half">
                            <label>
                                Username:
                                <input type="text" disabled value={currentUser.username} />
                            </label>

                            <label>
                                Location
                                <input disabled type="text" />
                            </label>
                            <label>
                                City:
                                <input disabled value={currentUser.city} readOnly />
                            </label>
                            <label>
                                State:
                                <input disabled value={currentUser.state} readOnly />
                            </label>

                            <label>
                                Bio: <br />
                                <textarea
                                    disabled
                                    cols="35"
                                    rows="5"
                                    value={currentUser.bio}></textarea>
                            </label>
                        </div>
                    </div>
                    <button>
                        <Link to="/profile/edit">Edit Profile</Link>
                    </button>
                </form>
            </div>
        );
    }
}

export default Profile;
