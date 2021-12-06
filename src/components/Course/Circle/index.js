import React, { useState } from "react";
import { useStyles } from './styles';
import { Box, CircularProgress, Grid, Button } from "@material-ui/core";
import Intro from "../Intro";
import Discussions from "../../Discussion";
import Done from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import clsx from "clsx";
import { register, unregister, useCourseDispatch } from "../../../context";

const Circle = ({ course }) => {
    const classes = useStyles();
    const [registerState, setRegisterState] = useState('');
    const [registered, setRegistered] = useState(course.registered);
    const [loading, setLoading] = useState(false);
    const dispatch = useCourseDispatch();
    
    const handleClick = (e) => {
        e.preventDefault()
        setLoading(true);
        setTimeout(() => {
            if (course.registered) {
                unregister(course.id, dispatch)
                setRegistered(false)
                setRegisterState('unregister')
                console.log(`> Unregister to course ${course.name}`)
            } else {
                register(course.id, dispatch)
                setRegistered(true)
                setRegisterState('register')
                console.log(`> Register to course ${course.name}`)
            }
            setLoading(false);
        }, 1000)
    }

    return (
        <Box components="div" className={classes.box}>
                <Grid item xs={12}>
                    <Intro course={course} />
                    { /*Action buttons*/ }
                    <Grid container justifyContent="center" className={classes.btnGroup}>
                    <Button 
                        variant="contained" 
                        align="center"
                        disableRipple
                        disableElevation
                        startIcon={registered ? <Done /> : ''}
                        className={clsx(classes.registerBtn, registered && classes.success)}
                        onClick={handleClick}
                        disabled={loading}
                    >
                        {`Register${registered ? 'ed': ''}`}
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Grid>
                </Grid>

            {/* <Divider light className={classes.divider}/> */}
            { /*Discussions*/ }
            <Discussions discussions={course.discussions}/>
            { /*<FileGroups fileGroups={course.fileGroup}/>*/ }
            {registerState.length > 0 && (
                <Alert 
                    severity="info"
                    className={classes.alert}
                    onClose={() => {setRegisterState('')}}
                    variant="filled"
                >
                    Successfully {registerState === 'unregister' && `un`}registered.
                </Alert>
            )}
        </Box>
    );
}

export default Circle;