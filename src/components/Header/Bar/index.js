import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

const Bar = ({ vertical, children }) => {
    const classes = useStyles(vertical);

    return (
        <Box component="div" className={classes.bar}>
            { children }
        </Box>
    );
}

export default Bar;