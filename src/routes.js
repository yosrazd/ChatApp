import React from 'react';
import { Route } from 'react-router';

import App from './App';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="chat" component={ChatPage} />
  </Route>
)