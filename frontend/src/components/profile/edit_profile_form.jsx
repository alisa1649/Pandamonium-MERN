import React from 'react';
import { Redirect } from 'react-router-dom';
/* global google */

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            bio: '',
            city: '',
            state: '',
            image_path: './panda.png',
            img_bg_color: 'white',
            redirect: false,
            selectedIdx: 0,
            imgArr: ['/panda.png', '/panda2.png', '/panda3.png', '/panda4.png'],
        };

        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUserInfo();

        const options = {
            types: ['(cities)'],
            componentRestrictions: {country: "us"}
        };
        
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, options);
        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentUser && !prevState.id) {
            this.setState({
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                bio: this.props.currentUser.bio,
                city: this.props.currentUser.city,
                state: this.props.currentUser.state,
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

    handlePlaceChanged = () => {
      
        const place = this.autocomplete.getPlace();
        this.setState ({
            city: place.address_components[0].long_name,
            state: place.address_components[2].long_name
        })

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

    updateColor() {
        return (e) => {
            let newColor = e.currentTarget.id;
            this.setState({
                img_bg_color: newColor,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let userInfo = {
            username: this.state.username,
            bio: this.state.bio,
            city: this.state.city,
            state: this.state.state,
            image_path: this.state.image_path,
            img_bg_color: this.state.img_bg_color,
        };
        this.props.editCurrentUserInfo(userInfo);
        this.setState({
            redirect: true,
        });
    }

    handleChange= (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
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
                    <label>
                        <input ref={this.autocompleteInput}  
                        id="autocomplete" 
                        placeholder="Enter your location"
                        type="text"
                        />
                    </label>
                    <input    
                        // name={"city"}
                        value={this.state.city}
                        placeholder={"city"}
                        onChange={this.update('city')}
                    />
                    <input 
                        // name= {"state"}
                        value={this.state.state}
                        placeholder={"state"}
                        onChange={this.update('state')}
                    />
                    <div className="main-form-section">
                        <div className="left-half">
                            <label>
                                Username:
                                <input type="text" value={this.state.username} onChange={this.update('username')} />
                            </label>

                            <label>
                                Bio: <br />
                                <textarea
                                    cols="35"
                                    rows="5"
                                    value={this.state.bio}
                                    onChange={this.update('bio')}></textarea>
                            </label>
                        </div>
                        <div className="right-half">
                            <div className="new-avatar-box">
                                <h3>New Avatar:</h3>
                                <div className="profile-pic-sample" id={this.state.img_bg_color}>
                                    <img src={this.state.image_path}></img>
                                </div>
                            </div>
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
                            <div className="color-box">
                                <div className="color" id="blue" onClick={this.updateColor()}></div>
                                <div className="color" id="red" onClick={this.updateColor()}></div>
                                <div className="color" id="green" onClick={this.updateColor()}></div>
                                <div className="color" id="purple" onClick={this.updateColor()}></div>
                                <div className="color" id="yellow" onClick={this.updateColor()}></div>
                                <div className="color" id="orange" onClick={this.updateColor()}></div>
                                <div className="color" id="pink" onClick={this.updateColor()}></div>
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
