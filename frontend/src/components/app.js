import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal'

import LoginFormContainer from './session_forms/login_container';
import ProfileContainer from './profile/profile_container'
import EditProfileFormContainer from './profile/edit_profile_form_container';
import Dashboard from "./dashboard/dashboard";

import Thread from "./thread/post/thread";

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />


      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/profile/edit" component={EditProfileFormContainer} />
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/thread/:postId" component={Thread} />
    </Switch>
  </div>
);

export default App;
