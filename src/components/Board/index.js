import React, { useState } from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Course from "../Course/index";
import Header from "../Header/index";
import ScrollZoom from "../../utils/scrollZoom";
import ScrollDrag from "../../utils/scrollDrag";
import $ from 'jquery';

const Board = () => {
    const classes = useStyles();
    const [scale, setScale] = useState(100);
    const courses = [
        {
            id: 1,
            name: "Interactive Media Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1, 
                    title: "Course teachers", 
                    comments: [
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                    ],
                    date: "01/01/2018"
                },
                {
                    id: 2, 
                    title: "Course material", 
                    comments: [
                        {id: 1, comment: "Material sucks!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Meeh!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                    ],
                    date: "01/01/2018"
                }
            ],
            content: "link_to_content"
        },
        {
            id: 2,
            name: "Software Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1, 
                    title: "Course teachers", 
                    comments: [
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 2, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 2, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                    ],
                    date: "01/01/2018"
                }
            ],
        },
        {
            id: 3,
            name: "Interactive Media Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1, 
                    title: "Course teachers", 
                    comments: [
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 3, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 3, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                    ],
                    date: "01/01/2018"
                }
            ],
            content: "link_to_content"
        },
        {
            id: 4,
            name: "Software Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1, 
                    title: "Course teachers", 
                    comments: [
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
                    ],
                    date: "01/01/2018"
                }
            ],
        },
    ]

    useEffect(() => {
        ScrollZoom($('#container'), 4, 0.7, setScale)
        ScrollDrag($('#container'))
    }, [])

    return (    
        <div className={classes.container}>
            <Header title="2020/2021" zoomIndex={scale}/>
            <div id="container" className={classes.content}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
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