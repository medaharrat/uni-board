import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Intro = ({ course }) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.box}>
            <Typography variant="h5" className={classes.title} align='center'>
                { course.name }
            </Typography>
            <Typography variant="body2" className={classes.description} >
                { course.description }
            </Typography>
        </Box>
    );
}

export default Intro;