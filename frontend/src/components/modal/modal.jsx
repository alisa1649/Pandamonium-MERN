import React from 'react';

import SignUpForm from '../session_forms/signup_container';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal ({modal, closeModal}) {
    if (!modal) {
        return null;
    };

    let component;
    switch (modal) {
        case 'sign-up':
            component = <SignUpForm />;
            break;
        default: 
            return null;
    }

    return (
        <div className="modal-background" onClick={e => closeModal()}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)