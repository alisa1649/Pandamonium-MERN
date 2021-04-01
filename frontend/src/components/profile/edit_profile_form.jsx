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
            redirect: false,
            
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
            debugger;
            this.setState({
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                bio: this.props.currentUser.bio,
                city: this.props.currentUser.city,
                state: this.props.currentUser.state
            });
        }
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handlePlaceChanged= () => {
      
        const place = this.autocomplete.getPlace();
        this.setState ({
            city: place.address_components[0].long_name,
            state: place.address_components[2].long_name
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let userInfo = {
            username: this.state.username,
            bio: this.state.bio,
            city: this.state.city,
            state: this.state.state
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
                    <input type="submit" value="Edit Profile"></input>
                </form>


            </div>
        );
    }
}

export default EditProfileForm;
