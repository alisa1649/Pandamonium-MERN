import SignUpForm from './signup_form'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session, 
        formType: "sign-up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);