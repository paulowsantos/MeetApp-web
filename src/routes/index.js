import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import MyMeets from '../pages/MyMeets';
import MeetDetail from '../pages/MeetDetail';
import NewMeet from '../pages/NewMeet';
import Profile from '../pages/Profile';
import SearchMeets from '../pages/SearchMeets';
import Registrations from '../pages/Registrations';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/mymeets" exact component={MyMeets} isPrivate />
      <Route path="/mymeets/:meet" component={MeetDetail} isPrivate />
      <Route path="/newmeet" exact component={NewMeet} isPrivate />
      <Route path="/newmeet/:meet" component={NewMeet} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/searchmeets" component={SearchMeets} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
    </Switch>
  );
}
