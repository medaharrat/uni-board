import React, { useState } from "react";
import {
    Box, Accordion, AccordionSummary, AccordionDetails, Typography, Modal, Grid
} from "@material-ui/core";
import Comment from "../Comment";
import TextField from '@mui/material/TextField';
import CustomButton from "../../CustomButton";
import IconButton from '@material-ui/core/IconButton';

import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import { useStyles } from "./styles";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Card from '@material-ui/core/Card';

const CommentsWrapper = ({ comments }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"

        >
            {
                comments.map((comment) => (
                    <Comment
                        title={comment.comment}
                        height={comment.size[0]}
                        width={comment.size[0]}
                        color={comment.color}
                        key={comment.id}
                    />
                ))
            }


            <div className={classes.newComment} onClick={handleOpen}>
                <AddCircleOutlineRoundedIcon disableRipple className={classes.plus} > + </AddCircleOutlineRoundedIcon>
            </div>

            {/* NEW COMMENT MODAL */}


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography className={classes.text} id="modal-modal-title" variant="h6" component="h2">
                        Add a new Comment
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
                            <Typography className={classes.text}  >
                                Choose background color

                            </Typography>
                            <IconButton  >
                                <Card className={classes.comment1} />
                            </IconButton>
                            <IconButton  >
                            <Card className={classes.comment2} />
                            </IconButton>
                            <IconButton >
                            <Card className={classes.comment3} />
                            </IconButton>
                            <IconButton  >
                            <Card className={classes.comment4} />
                            </IconButton>
                            <IconButton  >
                            <Card className={classes.comment5} />
                            </IconButton>
                        </div>
                        <div>
                            <br />
                            <CustomButton className={classes.modal} text="Post comment" />
                        </div>





                    </Grid>
                </Box>
            </Modal>






        </Grid>


    );
}

export default CommentsWrapper;