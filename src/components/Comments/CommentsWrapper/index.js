import React from "react";
import Grid from "@material-ui/core/Grid";
import Comment from "../Comment";

const CommentsWrapper = ({ comments }) => {
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
        </Grid>
    );
}

export default CommentsWrapper;