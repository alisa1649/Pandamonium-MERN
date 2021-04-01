import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {},
        };

        this.handleClose = this.handleClose.bind(this);
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


    handleClose() {
      
        this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
        };
        
        
        this.props.signup(user)
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
            <div className="signup-form-container">
                <h2 className='signup-header'>Sign Up</h2> 
                <h3>It's quick and easy!</h3>
                <button onClick={this.props.closeModal} className='btn-close'>X</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        
                        <label>
                            Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <br />
                        <label>
                            Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <br />
                        <label>
                            Re-Enter Password:
                            <input type="password" value={this.state.password2} onChange={this.update('password2')} />
                        </label>
                        <br />
                        
                        <input type="submit" value="Submit" />
                 
                        {this.renderErrors()}
                        {this.props.signedIn === true ? this.handleClose() : null}
                        {/* Location information goes here */}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);