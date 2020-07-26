import React from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import { Paper, Grid, Button, TextField, Divider, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../../utils';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/authActions';
import Footer from '../../components/Footer';


const FormikTextField = withFormikField(TextField);

function AddInstagram(props) {

    const handleSubmit = values => {
        //props.login({ username: values.email, password: values.password });
    }

    return (

        <Grid item md={6} style={{ marginTop: -150 }}>

            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required('Username is required'),
                    password: Yup.string().required('Password is required')
                })
                }
                onSubmit={handleSubmit}
            >
                <Form >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Before we continue our business, you need to add your Instagram Account.</Typography>
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
                            <Button variant='contained' color='primary' type="submit">Add Instagram</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Grid >
    )

}


const mapDispatchToProps = { login: loginAction };

export default connect(null, mapDispatchToProps)(AddInstagram);