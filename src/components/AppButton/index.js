import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import clsx from  'clsx';

const AppButton = ({ text, cancel, startIcon }) => {
    const classes = useStyles();

    return (
        <Button 
            variant="contained" 
            className={clsx(classes.btn, (cancel ? classes.cancel : classes.default))}
            align="center"
            disableRipple
            disableElevation
            startIcon={startIcon}
        >
            {text ? text : 'Button'}
        </Button>
    )
}

export default AppButton;