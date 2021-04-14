import React from 'react';
import { Link } from 'react-router-dom';
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
        debugger;
        const { currentUser } = this.props;
        if (!currentUser) {
            return <div>User not found</div>;
        }
        return (
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic" id={currentUser.img_bg_color}>
                        <img src={currentUser.image_path} alt="panda??" />
                    </div>
                    <h1>{currentUser.username}'s Profile</h1>
                </div>
                <div className="main-form-section"></div>
                <button>
                    <Link to="/profile/edit">Edit Profile</Link>
                </button>
            </div>
        );
    }
}

export default Profile;
