import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { DASHBOARD } from '../../assets/routes';
import { compose } from 'redux'


function PublicRoute({ isAuthenticated, component: Component, ...rest }) {
    return <Route   {...rest}
        render={renderProp => {
            console.log(renderProp, ' je prop');

            return isAuthenticated ? <Redirect to={DASHBOARD} /> : <Component {...renderProp} />
        }}


    />

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(PublicRoute);