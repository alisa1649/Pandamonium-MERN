import SessionForm from './session_form'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

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
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button className='btn-create-account secondary' onClick= {(e) => {
                e.preventDefault();
                dispatch(openModal('sign-up'))
                }} >
            Create New Account
            </button>
        ),
        demoForm: (
            <button className='btn-demo-user secondary' onClick= {(e) => {
                e.preventDefault();
                dispatch(login({
                    email: "miamidude@gmail.com",
                    password: "miamidude"
                }))
            }} >
                Login as Demo User
            </button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)