import React, { useEffect } from 'react'
import {
    Grid, Card, Avatar, CardMedia, CardHeader, CardContent, CardActions, makeStyles,
    FormControlLabel, FormGroup, Switch, Typography, IconButton, Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getFriendsAction, deleteFriendAction } from '../../store/actions/friendActions';
import { DASHBOARD } from '../../assets/routes';
import { withRouter } from 'react-router-dom';
import { formatDate } from '../../utils';


function Following(props) {

    useEffect(() => {
        props.getFriendsAction();
    }, [])


    return (
        <Grid container md={12} xs={12} alignItems='center' spacing={3} style={{ margin: '15px 0' }}>
            {!props.friends ? <Typography variant='h3' style={{ textAlign: 'center' }}>Loading...</Typography>
                : props.friends.length === 0 ?
                    <Grid item md={12} xs={12}>
                        <Typography variant='h3' style={{ textAlign: 'center' }}>Awww, you don't have any friends :( </Typography>
                    </Grid>
                    : <><Grid item md={10} xs={12} >
                        <Typography variant='h4' style={{ textAlign: 'left' }}>Friends you're following... </Typography>
                    </Grid>
                        <Grid item md={2} xs={12}>
                            <Typography variant='h4' style={{ textAlign: 'center' }}>{props.friends.length}/5 max</Typography>
                        </Grid></>}


            {!props.friends ? '' : props.friends.map(friend => (
                <Grid item md={4} xs={12} >
                    <Card style={{ alignItems: 'center' }}>
                        <CardHeader title={friend.fullName} subheader={`@${friend.username}`} style={{ textAlign: 'center' }} />

                        <Grid container justify='center'>
                            <Avatar src={friend.picture} style={{ width: 150, height: 150 }} />
                        </Grid>

                        <CardContent style={{ marginLeft: 15 }}>
                            <FormGroup row alignItems='center'>
                                <FormControlLabel
                                    control={<Switch
                                        checked={true}
                                        onChange={() => { }}
                                        name="checkedStory"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />} label='Stalk stories' />

                                <FormControlLabel control={
                                    <Switch
                                        checked={true}
                                        onChange={() => { }}
                                        color="primary"
                                        name="checkedPost"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />}
                                    label='Stalk posts' />


                                <FormControlLabel control={
                                    <Switch
                                        checked={true}
                                        onChange={() => { }}
                                        color="secondary"
                                        name="checkedEmail"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />}
                                    label='Notify me via email' />

                            </FormGroup>

                            <Typography>Last Post: {formatDate(friend.lastPost)}</Typography>
                            <Typography>Last Story: {formatDate(friend.lastStory)}</Typography>
                        </CardContent>

                        <Grid container justify='center' style={{ marginBottom: 10 }}>
                            <Button onClick={() => props.history.push(`${DASHBOARD}/${friend.username}`)} color='primary'>VIEW POSTS</Button>
                            <Button onClick={() => props.deleteFriend(friend.username)} color='secondary'>UNFRIEND</Button>
                        </Grid>

                    </Card>
                </Grid >

            ))}




        </Grid >
    )
}

const mapStateToProps = state => ({
    friends: state.friend.following,
})

const mapDispatchToProps = {
    getFriendsAction,
    deleteFriend: deleteFriendAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Following));