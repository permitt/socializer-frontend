import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, MapStateToProps } from 'react-redux';


function PublicRoute({ component: Component, ...rest }) {
    return <Route   {...rest}
        render={props => {

            return props.isAuthenticated ? <Redirect to={'/dashboard'} /> : <Component {...props} />

        }}


    />

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(PublicRoute);