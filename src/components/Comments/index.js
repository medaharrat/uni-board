import React from "react";
import CommentsWrapper from "./CommentsWrapper";

const Comments = ({ course_id, discussion_id, comments }) => {
    return (
        <CommentsWrapper course_id={course_id} discussion_id={discussion_id} comments={comments} />
    );
}

export default Comments;