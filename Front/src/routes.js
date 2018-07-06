// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App  from './components/App/';
import Home from './components/Home/';
import Login from './components/Login/';
import Register from './components/Register/';
import UserWindow from './components/User/UserWindow';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/login" exact component={ Login } />
      <Route path="/userwindow" exact component={ UserWindow } />
      <Route path="/register" exact component={ Register } />
      <Route component={ Page404 } />
    </Switch>
  </App>


export default AppRoutes;
