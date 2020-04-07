import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';
import Profile from './pages/Profile';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/list' component={List} />
            <Route path='/profile/:id' component={Profile} />
         </Switch>
      </BrowserRouter>
   )
}