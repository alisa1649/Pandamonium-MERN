import { connect } from 'react-redux';
import { getCurrentUserInfo, editCurrentUserInfo } from '../../actions/user_actions';
import EditProfileForm from './edit_profile_form';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
        editCurrentUserInfo: (newInfo) => dispatch(editCurrentUserInfo(newInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)

