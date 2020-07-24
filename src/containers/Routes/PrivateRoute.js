import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={props => {
                return props.isAuthenticated ? <Component {...props} /> : <Redirect to={'/login'} />
            }}
        />
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(PrivateRoute);