import SessionForm from './session_form'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        formType: "login",
        modalStatus: state.ui.modal 
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        login: user => dispatch(login(user)),
        otherForm: (
            <button className='btn-create-account' onClick= {(e) => {
                e.preventDefault();
                dispatch(openModal('sign-up'))               
                }} >
            Create New Account
            </button>
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)