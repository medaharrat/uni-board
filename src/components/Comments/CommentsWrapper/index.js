import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Comment from "../Comment";
import { useStyles } from "./styles";

const CommentsWrapper = ({ comments }) => {
    const classes = useStyles();

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
            <div className={classes.newComment}>
                <IconButton disableRipple className={classes.plus}> + </IconButton>
            </div>
        </Grid>
    );
}

export default CommentsWrapper;