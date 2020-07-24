import React from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import { Paper, Grid, Button, TextField, Divider } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../utils';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';


const FormikTextField = withFormikField(TextField);

function LoginPage() {
    return (
        <div>
            <NavBar />
            <Grid
                container
                component={Paper}
                direction="column"
                justify="center"
                md={6}
                alignItems="center"
                style={{ margin: '0 auto', marginTop: 100 }}
            >

                <Grid item md={12}>

                    <Typography variant='h5'>Enter your credentials below</Typography>

                </Grid>
                <Divider />
                <Grid item md={12} style={{ marginTop: 10, width: '80%' }}>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Emaill address is not valid')
                                .required('Email address is required')
                                .max(255),
                            password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
                        })
                        }
                        onSubmit={() => { }}
                    >
                        <Form >
                            <Grid container spacing={2}>

                                <Grid item xs={12}>

                                    <Field
                                        component={FormikTextField}
                                        type="text"
                                        name="email"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Email"

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
                                    <Button variant='contained' color='primary' type="submit">Login</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid>

            </Grid>
        </div >
    )
}

const mapStateToProps = state => { };
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);