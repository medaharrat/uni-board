import React from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Course from "../Course/index";
import Header from "../Header/index";
import ScrollZoom from "../../utils/scrollZoom";
import $ from 'jquery';

const Board = () => {
    const classes = useStyles();
    const courses = [
        {
            id: 1,
            name: "Interactive Media Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            comments: [
                {student_id: 1, comment: "This course was useful!", date: "2020-01-05"},
                {student_id: 2, comment: "It is quite easy to pass the course.", date: "2020-01-11"},
            ],
            content: "link_to_content"
        },
        {
            id: 2,
            name: "Software Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            comments: [
                {student_id: 1, comment: "Make sure you manage your time.", date: "2020-01-01"},
                {student_id: 2, comment: "The material is interesting.", date: "2020-02-01"},
            ]
        },
    ]

    useEffect(() => {
        ScrollZoom($('#slideContainer'), 3, 0.2)
    }, [])

    return (    
        <div className={classes.container}>
            <Header title="2020/2021" />
            <div id="slideContainer" className={classes.content}>
            <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.box}
            >
                {courses.map(course => (
                    <Course course={course} key={course.id}/>
                ))}
            </Grid>
            </div>
        </div>
    );
}

export default Board;