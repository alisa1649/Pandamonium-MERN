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
        return (
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic" id={currentUser.img_bg_color}>
                        <img src={currentUser.image_path} alt="panda??" />
                    </div>
                    <h1>{currentUser.username}'s Profile</h1>
                </div>
                <div className="profile-body">
                    <div className="location-box">
                        <h3>Current Location:</h3> 
                        <br/>
                        <p>City: {currentUser.city}</p>
                        <br/>
                        <p>State: {currentUser.state}</p>
                    </div>
                    <div className="bio-box">
                        <h3>Bio: </h3>
                        <p>{currentUser.bio}</p>
                    </div>
                    
                    <Link to="/profile/edit">Edit Profile</Link>
                </div>
            </div>
        );
    }
}

export default Profile;
