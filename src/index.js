import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import 'antd-mobile/dist/antd-mobile.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, HashRouter, Redirect } from 'react-router-dom';

const router =
  <HashRouter>
    <Redirect to="/login" from='/' exact />
    <Route path="/home" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
  </HashRouter>

ReactDOM.render(router, document.getElementById('root'))
