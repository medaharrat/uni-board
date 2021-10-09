import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

const Content = ({ type }) => {
    const classes = useStyles();

    return (
        <Box components="div" className={classes.box}>
            This is some content
        </Box>
    );
}

export default Content;