import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import LoginFormContainer from './session_forms/login_container';
import Modal from './modal/modal'

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
        <AuthRoute exact path="/" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;