import React from 'react';
import { withRouter } from 'react-router-dom';
import './sesssion_forms.css'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.currentUser === true) {
        //     this.props.history.push('/');  <--- dashboard route will go here
        // }

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
        const user = Object.assign({}, this.state);
        this.props.login(user)
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
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1 className='welcome-header'>Welcome to Pandamonium!</h1>
                        <div className ='welcome-body'> 
                        Pandamonium is a location based social media application for members of the LGBTQ community and allies. We provide a community for individuals to communicate and provide one other with support, resources, and friendships.                        
                        </div>
                        <h2 className='login-header'>Sign In</h2>
                        
                        {this.props.modalStatus === null ? <p>{this.renderErrors()}</p> : null}
                        
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />

                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />

                        <input type="submit"  value="submit" />
                    </div>
                </form>

                <h3 className='createaccount-header'>New User? Create an Account</h3>
                {this.props.otherForm}

                <footer>Copyright &copy; 2021 PandaCorp</footer>
            </div>
        );
    }
}

export default withRouter(SessionForm);

