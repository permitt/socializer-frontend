import React from 'react'
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';


function Following(props) {
    return (
                
    )
}

const mapStateToProps = state => ({
    friends: state.friend.following,

})
export default connect(null)(Following);