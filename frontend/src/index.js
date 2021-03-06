import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import { createNewVoteOnPost } from './actions/parent_post_actions';
import { createNewVote } from './util/post_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    // Make state accessible during development
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        window.getState = store.getState;
    }
    window.getState = store.getState;
    window.store = store;
    window.createNewVoteOnPost = createNewVoteOnPost;
    window.createNewVote = createNewVote;
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});
