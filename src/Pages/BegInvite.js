import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { LOGIN } from '../assets/routes'
import { homePageStyle } from '../assets/styles'


const useStyles = makeStyles(homePageStyle);


export default function BegInvite(props) {
    const classess = useStyles();

    return (
        <>
            <NavBar />
            <div className={classess.body}  >
                <Grid container justify="center" direction='column' alignItems='center' md={12} >
                    <Grid item xs={10} md={12} >
                        <Typography variant="h3" style={{ color: 'white', paddingTop: 100 }}>NOT GONNA <span style={{ color: '#050A30' }}>HAPPEN</span></Typography>
                    </Grid>
                    <Grid item xs={10} md={6} lg={4}>
                        <Typography variant='h6' style={{ color: 'white', margin: '30px 0' }}>
                            Well you can only donate, and then by random chance we will choose a winner, who gets the credentials. We will send the login details via our 
                        corporate tooth fairy, and you may find the credentials below your pillow any night, after you donate of course!
                    </Typography>


                    </Grid>
                    <Grid item xs>
                        <Button className={classess.button} onClick={() => {}} variant="contained" color="secondary" >Donate</Button>
                    </Grid>
                </Grid>

            </div>
            <Footer />
        </>
    )
}
