import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import { Paper, Grid, Button, TextField, Divider, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../../utils';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import AddInstagram from '../AddInstagram';
import AddFriend from '../AddFriend';
import Following from '../Following/Following';
import FriendPosts from '../FriendPosts/FriendPosts';
const FormikTextField = withFormikField(TextField);

function Dashboard(props) {

    const handleSubmit = values => {
        props.login({ username: values.email, password: values.password });
    }

    return (
        <div>
            <NavBar />
            <Grid
                container
                component={Paper}
                direction="column"
                xs={10}
                md={10}
                alignItems="center"
                style={{ margin: '0 auto', marginTop: 100, minHeight: '100vh' }}
            >
                {props.instagram ? <Following />
                    : <AddInstagram />}


            </Grid>
            <Footer />
        </div >
    )

}

const mapStateToProps = state => ({
    instagram: state.auth.instagramUser
});

export default connect(mapStateToProps)(Dashboard);