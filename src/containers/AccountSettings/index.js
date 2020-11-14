import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Paper, Grid, Button, TextField, Divider, Container, FormGroup } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../../utils';
import { connect } from 'react-redux';
import { addFriendAction } from '../../store/actions/friendActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormikTextField = withFormikField(TextField);

function AccountSettings(props) {
    const [progress, setProgress] = useState(false);
    const [state, setState] = React.useState({
        checkedStory: true,
        checkedPost: true,
        checkedEmail: true
    });

    const handleSubmit = ({ username }) => {
        props.submit({ username, activeStory: state.checkedStory, activePosts: state.checkedPost, emailNotif: state.checkedEmail });
        setProgress(true);
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        setProgress(false);
    }, [props.notif]);


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
                <Grid item xs={10} md={6} style={{ marginTop: 50 }} >

                    <Formik
                        initialValues={{ username: props.email, instagram: props.instagram }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('Username is required'),
                            
                        })
                        }
                        onSubmit={handleSubmit}
                    >
                        <Form >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {progress ?
                                        <Typography variant='h4'>This may take a minute or two...</Typography>
                                        : <Typography variant='h4'>Settings for you
                            </Typography>}

                                    {progress && <LinearProgress style={{ marginTop: 10 }} />}

                                </Grid>
                                <Grid item xs={12}>

                                    <Field
                                        component={FormikTextField}
                                        type="text"
                                        name="username"
                                        variant="outlined"
                                        fullWidth
                                        disabled
                                        label="Email"
                                    />
                                    <Field
                                        component={FormikTextField}
                                        type="text"
                                        name="password"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label=" New Password"
                                    />
                                    <Field
                                        component={FormikTextField}
                                        type="text"
                                        name="password"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="New Password Again"
                                    />
                                    <hr />
                                    <Grid item xs={12}>
                                    <FormGroup row alignItems='center'>
                                        


                                        <FormControlLabel control={
                                            <Switch
                                                checked={state.checkedEmail}
                                                onChange={handleChange}
                                                color="secondary"
                                                name="checkedEmail"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />}
                                            label='Email me the new stuff' labelPlacement='start' />

                                    </FormGroup>
                                </Grid>
                                    <Grid container justify='center' style={{ margin: '10px 0px' }}>
                                    {!progress ? <Button variant='contained' color='primary' type="submit">SAVE</Button>
                                        : <CircularProgress />}

                                </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                <Typography variant='h4'>Instagram Account</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={FormikTextField}
                                        type="text"
                                        name="instagram"
                                        variant="outlined"
                                        disabled
                                        fullWidth
                                        label="Username"
                                    />
                                    
                   
                                </Grid>

                                
                                <Grid container justify='center' style={{ margin: '10px 0px' }}>
                                    {!progress ? <Button variant='contained' color='secondary' type="submit">DELETE</Button>
                                        : <CircularProgress />}

                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid >
            </Grid>
            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    instagram: state.auth.instagramUser
});

const mapDispatchToProps = { submit: () => {} };

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);