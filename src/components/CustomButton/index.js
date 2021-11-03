
import React from "react";
import { useStyles } from "./styles";
import {Button} from "@material-ui/core";

const CustomButton = ({text,type}) => {
    const classes = useStyles();
    
    if (type =="register")
    return (
            <Button variant="contained" className={classes.register} align = 'center'>
            {text}</Button>

    );
    else 
    if (type =="cancel")
    return (
        <Button variant="contained" className={classes.cancel} align = 'center'>
        {text}</Button>
    );
    
    else 
    if (type =="default")
 
    return (
        <Button variant="contained" className={classes.default} align = 'center'>
        {text}</Button>

);
else 
    return (
        <Button variant="contained" className={classes.default_2} align = 'center'>
        {text}</Button>

);
default_2
}

export default CustomButton;