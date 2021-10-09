import React from "react";
import { useStyles } from './styles';
import { Box } from "@material-ui/core";
import Intro from "../Intro";

const Circle = ({ course }) => {
    const classes = useStyles();

    return (
        <Box components="div" className={classes.box}>
            <Intro course={course} />
        </Box>
    );
}

export default Circle;