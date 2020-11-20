import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Paper, Grid, Button, TextField, Divider, Container, FormGroup, Avatar, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withFormikField } from '../../utils';
import { connect } from 'react-redux';
import { changePassword } from '../../store/actions/authActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormikTextField = withFormikField(TextField);

function AccountSettings(props) {
    const [progress, setProgress] = useState(false);
    const [state, setState] = React.useState({        
        checkedEmail: true
    });
    const [deleteState, setDeleteState] = useState(false);


    const handleSubmit = ({ username, password }) => {
        props.submit({ username, password });
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

                
                alignItems="center"
                style={{ margin: '0 auto', marginTop: 100, minHeight: '100vh' }}
            >
                <Grid item xs={10} md={6} style={{ marginTop: 50 }} >

                    <Formik
                        initialValues={{ username: props.email}}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('Username is required'),
                            password: Yup.string().required('Password is required'),
                            password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
                        })
                        }
                        onSubmit={handleSubmit}
                    >
                        <Form >
                            <Grid container  justify='center'  spacing={4}>
                                <Grid item xs={12}>
                                    {progress ?
                                        <Typography  style={{textAlign:'center'}} variant='h4'>Saving...</Typography>
                                        : <Typography style={{textAlign:'center'}} variant='h4'>Settings for you
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
                                        type="password"
                                        name="password"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label=" New Password"
                                    />
                                    <Field
                                        component={FormikTextField}
                                        type="password"
                                        name="password2"
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
                            </Grid>
                        </Form>

                    </Formik>
                    </Grid>










                    <Grid item xs={10} md={6} style={{ marginTop: 50 }} >

                    <Formik
                                initialValues={{ instagram: props.instagram}}
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().required('Username is required'),                                  
                                })}
                                onSubmit={() => {}}    >
                        <Form>
                            <Grid container  justify='center'  spacing={4}>
                                <Grid item xs={12}>
                                <Typography  style={{textAlign:'center', marginTop:35}} variant='h4'>Instagram Account</Typography>
                                </Grid>



                                <Grid container justify='center'>
                                    <Avatar src={props.picture} style={{ width: 150, height: 150 }} />
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
                                    <Button onClick={() => setDeleteState(true)} variant='contained' color='secondary' type="submit">DELETE</Button>
                               </Grid>
                            </Grid>
                        </Form>

                    </Formik>
                    </Grid>
                    </Grid>


            <Dialog
                open={deleteState}
                onClose={() => setDeleteState(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    <Typography>Are you sure you want to remove your instagram account?</Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => setDeleteState(false)}>Cancel</Button>
                    <Button color="primary" autoFocus onClick={() => { setDeleteState(false) }}>Confirm</Button>
                </DialogActions>
            </Dialog>




            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => ({
    notif: state.notification.message,
    email: state.auth.email,
    instagram: state.auth.instagramUser,
    picture: state.auth.instagramPicture
});

const mapDispatchToProps = { submit: changePassword };

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);