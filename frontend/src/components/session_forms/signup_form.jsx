import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from '../googlemap/googlemap';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            city: '',
            state: '',
            errors: {},
        };

    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ errors: nextProps.errors });
    }


    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }



    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            city: this.state.city,
            state: this.state.state
        };
        
        
        this.props.signup(user).then(() => {
            this.props.closeModal();
        })
    }



    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container session-form">
                <h2 className='signup-header'>Sign Up</h2> 
                <h3>It's quick and easy!</h3>
                <button onClick={this.props.closeModal} className='btn-close'>X</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <span className="errors">
                            {this.renderErrors()}
                        </span>
                        <label>
                            <input placeholder="Email" type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <br />
                        <label>
                            <input placeholder="Username" type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>
                        <br />
                        <label>
                            <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <br />
                        <label>
                            <input placeholder="Confirm Password" type="password" value={this.state.password2} onChange={this.update('password2')} />
                        </label>
                        <br />

                        <label>
                            City:
                            <SearchBar type="text" value={this.state.city} onChange={this.update('city')} />
                        </label>
                        <label>
                            State:
                            <SearchBar type="text" value={this.state.state} onChange={this.update('state')} />
                        </label>
                       
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);