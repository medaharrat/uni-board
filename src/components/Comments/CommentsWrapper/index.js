import React, { useState } from "react";
import {
    Box, TextField, IconButton, Typography, Radio,
    Modal, Grid, Card, FormControl, Button, CircularProgress
} from "@material-ui/core";
import Comment from "../Comment";
import { useStyles } from "./styles";
import AddCommentIcon from '@material-ui/icons/AddComment';
import clsx from 'clsx';
import { getCurrentDate } from '../../../utils/currentDate';
import { useCommentDispatch, addComment, deleteComment, useCourseState } from '../../../context';

const CommentsWrapper = ({ course_id, discussion_id, comments }) => {
    const classes = useStyles();
    const dispatch = useCommentDispatch();
    const { courses } = useCourseState();
    const user = JSON.parse( localStorage.getItem('user') );
    const [comments_, setComments] = useState(comments);
    const [open, setOpen] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        comment: "", 
        student: {}, 
        date: "",
        color: "#e5d7c6"
    })
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setEmpty(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        setTimeout(() => {
            // Generate dummy student and course
            values.id = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
            values.course_id = course_id;
            values.discussion_id = discussion_id;
            values.date = getCurrentDate();
            values.student = user ? user : {name: "Unknown"}
            // Validate
            if (values.comment.length == 0){
                setEmpty(true);
                setLoading(false);
            } else {
                setEmpty(false)
                // Add new comment
                console.log('> Add comment ' + JSON.stringify(values));
                addComment(values, dispatch)
                comments_.push(values);
                // Reset values
                setValues({ ...values, comment: '' });
                // Close the modal
                setOpen(false);
            }
            // Stop loading
            setLoading(false);
        }, 1000)
    }

    const getCurrentCourse = () => {
        let course = {}
        courses.map((c) => {
            if (course_id == c.id){
                course = c
            }
        })
        return course
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            { comments_.length > 0 ? 
                <>
                    {comments_.map((comment) => (
                        <Comment
                            title={comment.comment}
                            student={comment.student}
                            date={comment.date}
                            color={comment.color}
                            course={comment.course_id}
                            key={comment.comment}
                            handleDelete={() => {
                                setTimeout(() => {
                                    deleteComment(comment ,dispatch)
                                    setComments(
                                        comments_.filter((com) => com.comment !== comment.comment)
                                    )
                                }, 200)
                            }}
                        />
                    ))}

                    {getCurrentCourse().registered && (
                        <div className={classes.placeholder}>
                            <AddCommentIcon className={classes.plus} onClick={handleOpen}/>
                        </div>
                    )}
                </> : getCurrentCourse().registered && (
                    <Typography variant="body2">
                        There is no comment for this discussion, add one
                        {' '} 
                        <span onClick={handleOpen} className={classes.newComment}>here</span>.
                    </Typography>
                )
            }

            {/* NEW COMMENT MODAL */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography className={classes.modalTitle} variant="h6" component="h2">
                        Add a new comment
                    </Typography>
                    <div>
                        <FormControl fullWidth variant="outlined" className={classes.input}>
                            <TextField
                                id="comment"
                                label="Write here"
                                multiline
                                rows={10}
                                name="comment"
                                variant="outlined"
                                onChange={handleChange('comment')}
                                required
                                error={empty}
                            />
                        </FormControl>
                        <Grid container   
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <Typography className={classes.text}  >
                                    Choose background color :
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton disableRipple className={classes.colorIcon}>
                                    <Radio
                                        checked={values.color === '#e5d7c6'}
                                        onChange={handleChange('color')}
                                        value="#e5d7c6"
                                        name="comment-color-1"
                                    />
                                    <Card 
                                        className={clsx(
                                            classes.comment, 
                                            classes.c1
                                        )} 
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton disableRipple className={classes.colorIcon}>
                                    <Radio
                                        checked={values.color === '#bcbdb9'}
                                        onChange={handleChange('color')}
                                        value="#bcbdb9"
                                        name="comment-color-2"
                                    />
                                    <Card 
                                        className={clsx(
                                            classes.comment, 
                                            classes.c2 
                                        )} 
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton disableRipple className={classes.colorIcon}>
                                    <Radio
                                        checked={values.color === '#bbc8cf'}
                                        onChange={handleChange('color')}
                                        value="#bbc8cf"
                                        name="comment-color-3"
                                    />
                                    <Card 
                                        className={clsx(
                                            classes.comment, 
                                            classes.c3 
                                        )} 
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton disableRipple className={classes.colorIcon}>
                                    <Radio
                                        checked={values.color === '#bfd7bd'}
                                        onChange={handleChange('color')}
                                        value="#bfd7bd"
                                        name="comment-color-4"
                                    />
                                    <Card 
                                        className={clsx(
                                            classes.comment, 
                                            classes.c4
                                        )} 
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
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
        </Grid>
    );
}

export default CommentsWrapper;