import React, { useEffect } from 'react'
import {
    Grid, Card, Avatar, CardMedia, CardHeader, CardContent, CardActions, makeStyles,
    FormControlLabel, FormGroup, Switch, Typography, IconButton, Button, Accordion, AccordionSummary, AccordionDetails,
    Paper,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';
import { getPostsAction, deletePostAction } from '../../store/actions/postActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { formatDate } from '../../utils';
import { DASHBOARD } from '../../assets/routes';
import { PRIMARY_COLOR } from '../../assets/constants';

function Following(props) {

    useEffect(() => {
        props.getPostsAction(props.match.params.user);
    }, [])

    return (



        <div>
            <NavBar />
            <Grid
                container

                direction="column"
                xs={10}
                md={10}
                alignItems="center"
                style={{ margin: '0 auto', marginTop: 100, minHeight: '100vh' }}
            >
                <Grid container md={12} xs={12} alignItems='center' spacing={3} style={{ margin: '15px 0' }}>
                    {!props.posts ? <Typography variant='h3' style={{ textAlign: 'center' }}>Loading...</Typography>
                        : props.posts.length === 0 ?
                            <Grid item md={12} xs={12}>
                                <Typography variant='h3' style={{ textAlign: 'center' }}>Awww, you haven't stalked any posts yet :( </Typography>
                            </Grid>
                            : <Grid item md={12} xs={12} >
                                <Button startIcon={<ArrowBackIcon />} style={{ float: 'right' }} onClick={() => props.history.push(DASHBOARD)} variant='outlined' color='primary' size='large'>Go back</Button>
                            </Grid>}


                    <Grid item xs={12} md={12} >
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>POSTS</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container md={12} xs={12} spacing={3}>

                                    {!props.posts ? '' : props.posts.filter(post => post.type === 'POST').map(Post => (
                                        <Grid item md={4} xs={12} >
                                            <Card style={{ alignItems: 'center' }}>
                                                <CardHeader title={Post.fullName} subheader={`@${Post.owner}`} style={{ textAlign: 'center' }} />

                                                <Grid container justify='center'>
                                                    <Avatar variant="square" src={Post.url} style={{ width: '100%', height: '100%' }} />
                                                </Grid>
                                                <CardContent style={{ marginLeft: 15 }}>

                                                    <Typography>Uploaded at: {formatDate(Post.uploadedAt)}</Typography>

                                                </CardContent>

                                                <Grid container justify='center' style={{ marginBottom: 10 }}>
                                                    <Button onClick={() => props.deletePost(Post.id)} color='secondary'>DELETE</Button>
                                                </Grid>

                                            </Card>
                                        </Grid >


                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>



                    {!props.posts ? '' : props.posts.filter(post => post.type === 'STORY').length !== 0 && <Grid item xs={12} md={12} >
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>STORIES</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container md={12} xs={12} spacing={3}>
                                    {props.posts.filter(post => post.type === 'STORY').map(Post => (
                                        <Grid item md={4} xs={12} >
                                            <Card style={{ alignItems: 'center' }}>
                                                <CardHeader title={Post.fullName} subheader={`@${Post.owner}`} style={{ textAlign: 'center' }} />

                                                <Grid container justify='center'>
                                                    <Avatar variant="square" src={Post.url} style={{ width: '100%', height: '100%' }} />

                                                </Grid>

                                                <CardContent style={{ marginLeft: 15 }}>
                                                    <Typography>Uploaded at: {formatDate(Post.uploadedAt)}</Typography>
                                                </CardContent>

                                                <Grid container justify='center' style={{ marginBottom: 10 }}>
                                                    <Button onClick={() => props.deletePost(Post.id)} color='secondary'>DELETE</Button>
                                                </Grid>

                                            </Card>
                                        </Grid >


                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>}


                </Grid>
            </Grid>
            <Footer />
        </div >




    )
}

const mapStateToProps = state => ({
    posts: state.post.all,
})

const mapDispatchToProps = {
    getPostsAction,
    deletePost: deletePostAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);