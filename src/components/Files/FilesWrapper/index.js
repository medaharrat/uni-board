import React, { useState } from "react";
import {
    Box, Accordion, AccordionSummary, AccordionDetails, Typography, Modal, Grid
} from "@material-ui/core";
import File from "../File";
import TextField from '@material-ui/core/TextField';
import AppButton from "../../AppButton";
import IconButton from '@material-ui/core/IconButton';

import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import { useStyles } from "./styles";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Card from '@material-ui/core/Card';

const FilesWrapper = ({ files }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
    const handleSubmission = () => {
	};
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"

        >
            {
                files.map((file) => (
                    <File
                        title={file.name}
                        height={file.size[0]}
                        width={file.size[0]}
                        // color={comment.color}
                        key={file.id}
                    />
                ))
            }


            <div className={classes.newFile} onClick={handleOpen}>
                <AddCircleOutlineRoundedIcon className={classes.plus} > + </AddCircleOutlineRoundedIcon>
            </div>

            {/* NEW COMMENT MODAL */}


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new file
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
                        <div>
                            <input type="file" name="file" onChange={changeHandler} />
                            <div>
                                <button onClick={handleSubmission}>Submit</button>
                            </div>
                        </div>
                        <div>
                            <br />
                            <AppButton color='primary' text="Add File" />
                        </div>

                    </Grid>
                </Box>
            </Modal>






        </Grid>


    );
}

export default FilesWrapper;