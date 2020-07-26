import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import { Paper, Grid, Button, TextField, Divider, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../../utils';
import { connect } from 'react-redux';
import { addInstagramAction } from '../../store/actions/authActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const FormikTextField = withFormikField(TextField);

function AddInstagram(props) {
    const [progress, setProgress] = useState(false);

    const handleSubmit = values => {
        props.submit(values);
        setProgress(true);
    }

    useEffect(() => {
        setProgress(false);
    }, [props.notif]);

    return (

        <Grid item xs={10} md={6} style={{ marginTop: -150 }}>

            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required('Username is required'),
                    password: Yup.string().required('Password is required').min(6)
                })
                }
                onSubmit={handleSubmit}
            >
                <Form >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {progress ?
                                <Typography variant='h4'>This may take a few minutes...</Typography>
                                : <Typography>Before we continue our business, you need to add your Instagram Account.
                                Don't worry, we'll not access or do anything with your instagram account. See and
                                ACCEPT the terms below. But yeah, you'll read it, suuuure..
                            </Typography>}

                            {progress && <LinearProgress />}

                        </Grid>
                        <Grid item xs={12}>

                            <Field
                                component={FormikTextField}
                                type="text"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                label="Username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={FormikTextField}
                                type="password"
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                label="Password"

                            />
                        </Grid>
                        <Grid container justify='center' style={{ margin: '10px 0px' }}>
                            {!progress ? <Button variant='contained' color='primary' type="submit">Add Instagram</Button>
                                : <CircularProgress />}

                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Grid >
    )

}

const mapStateToProps = state => ({
    notif: state.notification.message
});

const mapDispatchToProps = { submit: addInstagramAction };

export default connect(mapStateToProps, mapDispatchToProps)(AddInstagram);