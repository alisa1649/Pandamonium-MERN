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

                <h1>Pandamonium</h1>
                <footer>Copyright &copy; 2021 PandaCorp</footer>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        
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

                {this.props.otherForm}
            </div>
        );
    }
}

export default withRouter(SessionForm);

