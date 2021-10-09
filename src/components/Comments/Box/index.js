import React from "react";
import { useStyles } from "./styles";

const CommentBox = ({ title, color, height, width }) => {
    const classes = useStyles();
    
    return (
        <>
            { title }
        </>
    );
}

export default CommentBox;