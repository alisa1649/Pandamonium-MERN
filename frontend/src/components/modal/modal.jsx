import React from 'react';

import SignUpForm from '../session_forms/signup_container';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal ({modal}) {
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
        <div className="modal-background">
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

const mapDispatchToProps = (dipsatch) => {
    return {
        closeModal: () => dipsatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)