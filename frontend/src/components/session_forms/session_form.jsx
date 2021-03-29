import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formType } = this.props;
        return <div>{formType === 'login' ? <h1>Log in!</h1> : <h1>Sign Up!</h1>}</div>;
    }
}
