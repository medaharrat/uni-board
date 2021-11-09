import React from "react";
import { useStyles } from './styles';
import { Box, Divider, Grid } from "@material-ui/core";
import Intro from "../Intro";
import Comments from "../../Comments";
import Discussions from "../../Discussion";

const Circle = ({ course }) => {
    const classes = useStyles();

    return (
        <Box components="div" className={classes.box}>
            <Grid container>
                <Grid item xs={12}>
                    <Intro course={course} />
                    { /*Action buttons*/ }
                    <Box>
                        <CustomButton register text="register"/>
                        <CustomButton cancel text="cancel"/>
                        <CustomButton text="default"/>
                    </Box>
                </Grid>
            </Grid>

            <Divider light className={classes.divider}/>
            { /*Discussions*/ }
            <Discussions discussions={course.discussions}/>
        </Box>
    );
}

export default Circle;