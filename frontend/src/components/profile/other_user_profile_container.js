import Profile from './profile';
import { connect } from 'react-redux';
import { getOtherUserInfo } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    debugger;
    const userId = ownProps.match.params.userId;
    return {
        currentUser: state.entities.users.currentUser,
        users: state.entities.users,
        userId,
        profileType: 'OtherUserProfile',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOtherUserInfo: () => dispatch(getOtherUserInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
