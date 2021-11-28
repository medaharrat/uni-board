import React, { useState, useContext } from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Course from "../../components/Course/index";
import Header from "../../components/Header/index";
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
            registered: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1,
                    title: "Course teachers",
                    comments: [
                        { id: 1, comment: "Teachers are awesome!", student: {name: 'Josh'}, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                        { id: 2, comment: "Awesome!", student: {name: 'Anna'}, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                },
                {
                    id: 2,
                    title: "Course material",
                    comments: [
                        { id: 1, comment: "Material is really interesting!", student: {name: 'Josh'}, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                        { id: 2, comment: "Meeh!", student: {name: 'Karim'}, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                }
            ],
            fileGroup: [
                {
                    id: 1,
                    title: "Materials",
                    files: [
                        { id: 1, name: "Lecture 1",  date: "25/01/2018", src: "", size: [40, 40] },
                        { id: 2, name: "Lecture 2",  date: "25/01/2018", src: "", size: [40, 40] },
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
                        { id: 1, comment: "Teachers are awesome!", student: {name: 'Sandra'}, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
                        { id: 2, comment: "Awesome!", student: {name: 'Sonia'}, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                }
            ],
            fileGroup: [
                {
                    id: 1,
                    title: "Recordings",
                    files: [
                        { id: 1, name: "Lecture 1",  date: "25/01/2018", src: "", size: [40, 40] },
                        { id: 2, name: "Lecture 2",  date: "25/01/2018", src: "", size: [40, 40] },
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
                        { id: 1, comment: "Teachers are awesome!", student: {name: 'Daniel'}, course_id: 3, date: "10/09/2021", color: "#f5f5dc", size: [40, 40] },
                        { id: 2, comment: "Awesome!", student: {name: 'Jason'}, course_id: 3, date: "16/09/2021", color: "#f5f5dc", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                }
            ],
            fileGroup: [
                {
                    id: 1,
                    title: "Lectures",
                    files: [
                        { id: 1, name: "Lecture 1",  date: "25/01/2018", src: "", size: [40, 40] },
                        { id: 2, name: "Lecture 2",  date: "25/01/2018", src: "", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                }
            ],
            content: "link_to_content"
        },
        {
            id: 4,
            name: "Software Technology",
            registered: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            discussions: [
                {
                    id: 1,
                    title: "Course teachers",
                    comments: [
                        { id: 1, comment: "Teachers are awesome!", student: {name: 'Steven'}, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                        { id: 2, comment: "Awesome!", student: {name: 'Mohamed'}, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                    ],
                    date: "01/01/2018"
                }
            ],
            fileGroup: [
                {
                    id: 1,
                    title: "Recordings",
                    files: [
                        { id: 1, name: "Lecture 1",  date: "25/01/2018", src: "", size: [40, 40] },
                        { id: 2, name: "Lecture 2",  date: "25/01/2018", src: "", size: [40, 40] },
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
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
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