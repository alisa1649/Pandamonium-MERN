import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import LandingPage from './main/landing_page'
import LoginFormContainer from './session_forms/login_container';
import SignupFormContainer from './session_forms/signup_container';
import ProfileContainer from './profile/profile_container'
import EditProfileFormContainer from './profile/edit_profile_form_container';
import Dashboard from "./dashboard/dashboard";

import '../styles/app.css';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/profile/edit" component={EditProfileFormContainer} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;