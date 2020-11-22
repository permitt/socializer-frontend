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
import { newError } from '../../store/actions/notificationActions';

const FormikTextField = withFormikField(TextField);

function AddFriend(props) {
    const [progress, setProgress] = useState(false);
    const [state, setState] = React.useState({
        checkedStory: true,
        checkedPost: true,
        checkedEmail: true
    });

    const handleSubmit = ({ username }) => {
        if(!props.instagram){
            props.errorMessage('You must add your instagram account first!');
            return;
        }
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
                        initialValues={{ username: '' }}
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
                                        : <Typography variant='h4'>Type in the username of a friend you want to stalk
                            </Typography>}

                                    {progress && <LinearProgress style={{ marginTop: 10 }} />}

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
                                    <FormGroup row alignItems='center'>
                                        <FormControlLabel
                                            control={<Switch
                                                checked={state.checkedStory}
                                                onChange={handleChange}
                                                name="checkedStory"
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />} label='Stalk stories' labelPlacement='start' />

                                        <FormControlLabel control={
                                            <Switch
                                                checked={state.checkedPost}
                                                onChange={handleChange}
                                                color="primary"
                                                name="checkedPost"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />}
                                            label='Stalk posts' labelPlacement='start' />


                                        <FormControlLabel control={
                                            <Switch
                                                checked={state.checkedEmail}
                                                onChange={handleChange}
                                                color="secondary"
                                                name="checkedEmail"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />}
                                            label='Notify me via email' labelPlacement='start' />

                                    </FormGroup>
                                </Grid>
                                <Grid container justify='center' style={{ margin: '10px 0px' }}>
                                    {!progress ? <Button variant='contained' color='primary' type="submit">Add Friend</Button>
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

const mapStateToProps = state => ({
    instagram: state.auth.instagramUser,
    notif: state.notification.message
});

const mapDispatchToProps = { submit: addFriendAction, errorMessage: newError };

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);