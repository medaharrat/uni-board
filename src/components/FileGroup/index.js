import React, { useState } from "react";
import {
    TextField, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Modal, Grid
} from "@material-ui/core";
import { useStyles } from "./styles";
import Files from "../Files";
import AppButton from "../AppButton";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import clsx from 'clsx';

const File = ({ fileGroups }) => {
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

                <Grid item><InsertDriveFileIcon className={classes.icon} /></Grid>
                <Grid item><Typography variant="body1" className={classes.title}>Files</Typography></Grid>

            </Grid>

            {fileGroups.map((fileGroup, i) => (
                <Accordion className={classes.accordion} square expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={fileGroup.id}>
                    <AccordionSummary aria-controls="panel-content" id="panel-header">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            {/* <Grid item><ArrowRightRoundedIcon/></Grid> */}

                            <Grid item><Typography className={classes.text}><b>{fileGroup.title}</b></Typography></Grid>
                            <Grid item className={clsx(classes.text, classes.date)}><Typography variant="body2">{fileGroup.date}</Typography></Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Files files={fileGroup.files} />
                    </AccordionDetails>
                </Accordion>
            ))}
            <div className={classes.newFile} onClick={handleOpen}>
                <Typography> Add new file group </Typography>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new file group
                    </Typography>
                    <div>
                        <br />
                    </div>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="right"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Write here"
                            multiline
                            rows={10}
                            variant="outlined"
                        />
                        <div>
                            <br />
                            <AppButton color='primary' text="Add new group" />
                        </div>

                    </Grid>
                </Box>
            </Modal>
           
        </Box>
    );
}

export default File;