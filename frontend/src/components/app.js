import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';

import LoginFormContainer from './session_forms/login_container';

import CurrentUserProfileContainer from './profile/current_user_profile_container';
import OtherUserProfileContainer from './profile/other_user_profile_container';
import EditProfileFormContainer from './profile/edit_profile_form_container';
import Dashboard from './dashboard/dashboard';
import AboutUs from './about_page/about_us.js';
import Thread from './thread/post/thread';

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <ProtectedRoute exact path="/profile" component={CurrentUserProfileContainer} />
            <ProtectedRoute exact path="/profile/edit" component={EditProfileFormContainer} />
            <ProtectedRoute exact path="/users/:userId" component={OtherUserProfileContainer} />
            <ProtectedRoute exact path="/" component={Dashboard} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/thread/:postId" component={Thread} />
            <ProtectedRoute exact path="/about" component={AboutUs} />
        </Switch>
    </div>
);

export default App;
