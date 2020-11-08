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
                    
                    <Grid item xs>
                        <Button className={classess.button} onClick={() => {}} variant="contained" color="secondary" >Donate</Button>
                    </Grid>
                </Grid>

            </div>
            <Footer />
        </>
    )
}
