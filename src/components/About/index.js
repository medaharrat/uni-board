import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

const About = () => {
    const classes = useStyles();
    
    return (
        <>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={6}>
                <Grid item xs={12} className={classes.logoContainer} >
                    <img className={classes.logo} src="./uniboard.png" />
                </Grid>
                <div className={classes.divider} />
                <Grid container className={classes.textContainer} >
                    <Grid item xs={4}>
                        <img className={classes.elte} src="./elte.png" />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>
                            Created as a solution for the students which are struggling to keep up with many university platforms at once.
                            Unibord, is an interactive board which inherits the concept of a central platform to get you started, find information, and communicate.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" href="/" color="primary" disableRipple className={classes.btn}>
                        Go back to the board
                    </Button>
                </Grid>
            </Grid>

        </Grid>
        </>
    )
}

export default About;