import React from 'react'
import Background from '../assets/background-image.jpg'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar'
import Footer from './Footer';

export default function HomePage(props) {

    return (
        <>
            <NavBar />
            <section style={{
                backgroundImage: `url(${Background})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', width: '100%', height: '1000px'
            }}>
                <Grid container justify="center" direction='column' alignItems='center'>
                    <Grid item xs>
                        <Typography variant="h3" style={{ color: 'white', paddingTop: 100 }}>SOMETHING COOL <span style={{ color: '#050A30' }}>IS HERE</span></Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='h6' style={{ color: 'white', width: 550, margin: '30px 0' }}>
                            Socializer is a tool that helps you stay off your phone. This app scrapes the data for you and
                            then uses Artificial Intelligence to process it, sounds cool? Well it is. But we're per invite
                            only, sorry bud. Got an invitation? Log in, dear sir.
                    </Typography>


                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color="secondary" style={{ fontSize: '18px', padding: '20px 40px', marginTop: 30, backgroundColor: '#000C66', opacity: '90%' }}>LOGIN</Button>
                    </Grid>
                </Grid>

            </section>
            <Footer />
        </>
    )
}
