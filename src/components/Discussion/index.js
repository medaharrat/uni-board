import React, { useState } from "react";
import {
    TextField, Box, Accordion, AccordionSummary, FormControl,
    AccordionDetails, Typography, Modal, Grid, Button, CircularProgress
} from "@material-ui/core";
import { useStyles } from "./styles";
import Comments from "../Comments";
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
// import { useDiscussionsDispatch } from '../../context';
import { getCurrentDate } from '../../utils/currentDate';
import { useDiscussionDispatch, addDiscussion, useCourseState } from '../../context';
import clsx from "clsx";

const Discussion = ({ discussions }) => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDiscussionDispatch();
    const { courses } = useCourseState();
    const [open, setOpen] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [values, setValues] = useState({
        title: '',
        description: '',
        date: '',
        comments: []
    });
    const [loading, setLoading] = useState(false);
    // const dispatch = useDiscussionsDispatch();
    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePanelChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleChange = (prop) => (event) => {
        setEmpty(false);
        setValues({ ...values, [prop]: event.target.value });
    };

    const getCurrentCourse = () => {
        let course = {}
        courses.map((c) => {
            if (discussions && discussions[0].course_id == c.id){
                course = c
            }
        })
        return course
    }
    //localStorage.removeItem("courses")

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        setTimeout(() => {
            // Validate 
            if (values.title.length == 0 || values.description.length == 0) {
                setEmpty(true);
                setLoading(false);
                return;
            }
            // Add new discussion
            let id = discussions[discussions.length - 1].id
            values.id = id + 1
            values.date = getCurrentDate();
            values.course_id = discussions[0].course_id
            
            addDiscussion(values.course_id, values, dispatch);
            discussions.push(values);
            // Reset values
            setValues({ ...values, title: '' });
            setValues({ ...values, description: '' });
            // Close the modal
            setOpen(false);
            // Stop loading
            setLoading(false);
        }, 1000)
    }

    return (
        <Box >
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <Grid item><MessageRoundedIcon className={classes.icon} /></Grid>
                <Grid item><Typography variant="body1" className={classes.title}>Discussions</Typography></Grid>

            </Grid>

            {discussions.map((discussion, i) => (
                <Accordion key={i} className={classes.accordion} square expanded={expanded === `panel${i}`} onChange={handlePanelChange(`panel${i}`)}>
                    <AccordionSummary aria-controls="panel-content" id="panel-header">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography className={classes.text}>
                                <b>{`${discussion.title.substr(0, 1).toUpperCase()}${discussion.title.substr(1, discussion.title.length)}`}</b>
                                </Typography>
                            </Grid>
                            <Grid item className={clsx(classes.text, classes.date)}><Typography variant="body2">{discussion.date}</Typography></Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Comments course_id={discussion.course_id} discussion_id={discussion.id} comments={discussion.comments} />
                    </AccordionDetails>
                </Accordion>
            ))}
            {getCurrentCourse().registered && (
                <div className={classes.newDiscussion} onClick={handleOpen}>
                    <Typography> Add new discussion </Typography>
                </div>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-discussion"
                aria-describedby="modal-discussion"
            >
                <Box className={classes.modal}>
                    <Typography className={classes.modalTitle} variant="h6" component="h2">
                        Add a new discussion
                    </Typography>
                    <div className={classes.modalContent} >
                        <FormControl fullWidth variant="outlined" className={classes.input}>
                            <TextField 
                                id="outlined-basic" 
                                label="Title" 
                                name="title" 
                                variant="outlined" 
                                error={empty && values.title.length == 0}
                                onChange={handleChange('title')}
                            />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" className={classes.input}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write here"
                                multiline
                                rows={10}
                                name="description"
                                variant="outlined"
                                error={empty && values.description.length == 0}
                                onChange={handleChange('description')}
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.input}>
                            <Button 
                                color="primary"
                                variant="contained"
                                disableElevation
                                disableRipple
                                className={classes.button}
                                onClick={handleSubmit}
                                disabled={loading || empty}
                            >
                                Add
                            </Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </FormControl>

                    </div>
                </Box>
            </Modal>
        </Box>
    );
}

export default Discussion;