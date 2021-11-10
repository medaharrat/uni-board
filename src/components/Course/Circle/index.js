import React from "react";
import { useStyles } from './styles';
import { Box, Divider, Grid } from "@material-ui/core";
import Intro from "../Intro";
import Discussions from "../../Discussion";
import CustomButton from "../../CustomButton";

const Circle = ({ course }) => {
    const classes = useStyles();

    return (
        <Box components="div" className={classes.box}>
            <Grid container>
                <Grid item xs={12}>
                    <Intro course={course} />
                    { /*Action buttons*/ }
                    <Grid container justifyContent="center" className={classes.btnGroup}>
                        <CustomButton register text="register"/>
                    </Grid>
                </Grid>
            </Grid>

            <Divider light className={classes.divider}/>
            { /*Discussions*/ }
            <Discussions discussions={course.discussions}/>
        </Box>
    );
}

export default Circle;