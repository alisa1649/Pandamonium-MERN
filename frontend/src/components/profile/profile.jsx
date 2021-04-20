import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePostList from './profile_post_list_container';
import GoogleMap from '../googlemap/googlemap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.profileType === 'CurrentUserProfile') {
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
        // TODO: make the city/state links to forums;

        return (
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic" id={user.img_bg_color}>
                        <img src={user.image_path} alt="panda??" />
                    </div>
                    <h1>{user.username}'s Profile</h1>
                </div>
                <div className="main-profile-section">
                    <div className="profile-left">
                        <div className="location-area">
                            <div className="profile-city">
                                City: <span>{user.city}</span>
                            </div>
                            <div className="profile-state">
                                State: <span>{user.state}</span>
                            </div>
                        </div>
                        <div className="bio-header">
                            <p>My Bio:</p>
                            <div className="bio-box">
                                <p className="bio-text">{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-right">
                        <h3>Posts by {user.username}</h3>
                        <div className="posts-box">
                            <ProfilePostList requestId={user.id} />
                        </div>
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
