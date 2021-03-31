import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal'

import LoginFormContainer from './session_forms/login_container';
import ProfileContainer from './profile/profile_container'
import EditProfileFormContainer from './profile/edit_profile_form_container';
import Dashboard from "./dashboard/dashboard";

import '../styles/app.css';
import '../styles/normalize.css';
import Thread from "../thread/post/thread";

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={LoginFormContainer} />


      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/profile/edit" component={EditProfileFormContainer} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/thread/:postId" component={Thread} />
    </Switch>
  </div>
);

export default App;
