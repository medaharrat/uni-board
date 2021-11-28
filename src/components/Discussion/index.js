import React, { useState } from "react";
import {
    TextField, Box, Accordion, AccordionSummary, FormControl,
    AccordionDetails, Typography, Modal, Grid, Button
} from "@material-ui/core";
import { useStyles } from "./styles";
import Comments from "../Comments";
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import clsx from "clsx";

const Discussion = ({ discussions }) => {
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <Grid item><MessageRoundedIcon className={classes.icon} /></Grid>
                <Grid item><Typography variant="body1" className={classes.title}>Discussions</Typography></Grid>

            </Grid>

            {discussions.map((discussion, i) => (
                <Accordion className={classes.accordion} square expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={discussion.id}>
                    <AccordionSummary aria-controls="panel-content" id="panel-header">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            {/* <Grid item><ArrowRightRoundedIcon/></Grid> */}

                            <Grid item><Typography className={classes.text}><b>{discussion.title}</b></Typography></Grid>
                            <Grid item className={clsx(classes.text, classes.date)}><Typography variant="body2">{discussion.date}</Typography></Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Comments comments={discussion.comments} />
                    </AccordionDetails>
                </Accordion>
            ))}
            <div className={classes.newDiscussion} onClick={handleOpen}>
                <Typography> Add new discussion </Typography>
            </div>

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
                    <div cassName={classes.modalContent} >
                        <FormControl fullWidth variant="outlined" className={classes.input}>
                            <TextField id="outlined-basic" label="Title" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" className={classes.input}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write here"
                                multiline
                                rows={10}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.input}>
                            <Button 
                                color="primary"
                                variant="contained"
                                disableElevation
                                disableRipple
                                className={classes.button}
                            >
                                Add
                            </Button>
                        </FormControl>

                    </div>
                </Box>
            </Modal>
        </Box>
    );
}

export default Discussion;