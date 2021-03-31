import React from 'react';
import { Link } from 'react-router-dom';

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
        debugger;
        return (
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic">
                        <img src={currentUser.image_path} alt="panda??" />
                    </div>
                    <h1>{currentUser.username}'s Profile</h1>
                </div>
                <div className="profile-body">
                    <div className="location-box">
                        <h3>Current Location:</h3> <h4>location goes here!</h4>
                    </div>
                    <div className="bio-box">
                        <h4>Bio: </h4>
                        <p>{currentUser.bio}</p>
                    </div>

                    <Link to="/profile/edit">Edit Profile</Link>
                </div>
            </div>
        );
    }
}

export default Profile;
