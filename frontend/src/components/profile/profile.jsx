import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from '../googlemap/googlemap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger;
        if (this.props.profileType === 'CurrentUserProfile') {
            debugger;
            this.props.getCurrentUserInfo();
        } else if (this.props.profileType === 'OtherUserProfile') {
            console.log('Profileee: ', this.props.userId);
            this.props.getOtherUserInfo(this.props.userId);
        }
    }

    render() {
        const { profileType } = this.props;
        let user;
        if (profileType === 'CurrentUserProfile') {
            user = this.props.currentUser;
        } else if (profileType === 'OtherUserProfile') {
            user = this.props.users[this.props.userId];
        }
        if (!user) {
            return <div>User not found</div>;
        }
        debugger;
        return (
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic" id={user.img_bg_color}>
                        <img src={user.image_path} alt="panda??" />
                    </div>
                    <h1>{user.username}'s Profile</h1>
                </div>
                <div className="main-profile-section">
                    <h3>Bio:</h3>
                    <div className="bio-box">
                        <p>{user.bio}</p>
                    </div>

                    <div className="location-area">
                        <h3>City: {user.city}</h3>
                        <h3>State: {user.state}</h3>
                    </div>
                </div>
                <button>
                    {profileType === 'CurrentUserProfile' ? (
                        <Link to="/profile/edit">Edit Profile</Link>
                    ) : (
                        <Link to="/dashboard">Back to Dashboard</Link>
                    )}
                </button>
            </div>
        );
    }
}

export default Profile;
