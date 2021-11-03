import React from "react";
import { useStyles } from './styles';
import { Box, Divider, Grid } from "@material-ui/core";
import Intro from "../Intro";
import Comments from "../../Comments";
import Content from "../../Content";
import CustomButton from "../../CustomButton";

const Circle = ({ course }) => {
    const classes = useStyles();

    return (
        <Box components="div" className={classes.box}>
            <Grid container>
                {/*
                <Grid item xs={course.content ? '9': '12'}>
                    <Intro course={course} />
                    { Action buttons }
                </Grid>
                { course.content && (course.content.length !== 0) && (
                <Grid item xs={3}>
                    <Content />
                </Grid>
                )}
                */}
                <Grid item xs={12}>
                    <Intro course={course} />
                    { /*Action buttons*/ }
                </Grid>
            </Grid>

            <Divider light className={classes.divider}/>
            <CustomButton text="register" type="register">  </CustomButton>
            <CustomButton text="cancel" type="cancel">  </CustomButton>
            <CustomButton text="Default" type="default">  </CustomButton>
            <CustomButton text="Default-2" type="Default_2">  </CustomButton>

            <Comments comments={course.comments} /> 
        </Box>
    );
}

export default Circle;