
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form'

const mapStateToProps = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session, 
        formType: "sign-up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);