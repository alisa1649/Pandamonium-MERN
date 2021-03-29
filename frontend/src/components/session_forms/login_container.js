import LoginForm from './login_form'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)