import React from "react";
import { useStyles } from "./styles";
import CourseCircle from "./Circle";

const Course = ({ course }) => {
    const classes = useStyles();

    return (
        <CourseCircle course={course}/>
    );
}

export default Course;