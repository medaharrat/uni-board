import React from "react";
import CourseCircle from "./Circle";
import Grid from "@material-ui/core/Grid";

const Course = ({ course, gridView }) => {
    return (
        <Grid item xs={gridView ? 12 : 6}>
            <CourseCircle course={course}/>
        </Grid>
    );
}

export default Course;