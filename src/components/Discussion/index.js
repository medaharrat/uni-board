import React, { useState } from "react";
import {
    Box, Accordion, AccordionSummary, AccordionDetails, Typography, Modal, Grid
} from "@material-ui/core";
import { useStyles } from "./styles";
import Comments from "../Comments";

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
            <Typography variant="body1" className={classes.title}>Discussions</Typography>
            {discussions.map((discussion, i) => (
                <Accordion square expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={discussion.id}>
                    <AccordionSummary aria-controls="panel-content" id="panel-header">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item><Typography>{ discussion.title }</Typography></Grid>
                            <Grid item className={classes.date}><Typography variant="body2">{ discussion.date }</Typography></Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Comments comments={discussion.comments} /> 
                    </AccordionDetails>
                </Accordion>
            ))}
            <div className={classes.newDiscussion}  onClick={handleOpen}>
                <Typography> Add new discussion </Typography>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new discussion
                    </Typography>
                    <Typography id="modal-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}

export default Discussion;