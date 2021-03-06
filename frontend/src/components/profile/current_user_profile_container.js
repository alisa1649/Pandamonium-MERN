import Profile from './profile';
import { connect } from 'react-redux';
import { getCurrentUserInfo } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users.currentUser,
        profileType: 'CurrentUserProfile',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
