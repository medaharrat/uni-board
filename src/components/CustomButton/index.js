import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import clsx from  'clsx';

const CustomButton = ({ text, register, cancel }) => {
    const classes = useStyles();

    return (
        <Button 
            variant="contained" 
            className={clsx(classes.btn, register ? classes.register : (cancel ? classes.cancel : classes.default))}
            align="center"
            disableRipple
            disableElevation
        >
            {text ? text : 'Button'}
        </Button>
    )
}

export default CustomButton;