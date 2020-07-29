import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../containers/Routes/PrivateRoute';
import PublicRoute from '../../containers/Routes/PublicRoute';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';
import { HOME, LOGIN, DASHBOARD, DASHBOARD_USER, ADD, SETTINGS } from '../../assets/routes';
import Dashboard from '../../containers/Dashboard';
import AddFriend from '../../containers/AddFriend';
import FriendPosts from '../../containers/FriendPosts/FriendPosts';


export default function Routes() {
    return (
        <Switch>
            <PublicRoute path={HOME} component={HomePage} exact />
            <PublicRoute path={LOGIN} component={LoginPage} exact />
            <PrivateRoute path={ADD} component={AddFriend} />
            <PrivateRoute path={DASHBOARD} component={Dashboard} exact />
            <PrivateRoute path={DASHBOARD_USER} component={FriendPosts} exact />
            <PrivateRoute path={SETTINGS} component={''} />

        </Switch>
    )
}

