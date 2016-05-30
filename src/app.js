import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage } from './pages';

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <Route path='/profile' component={ProfilePage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);