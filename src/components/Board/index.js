import React from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            name: "Software Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    useEffect(() => {
        ScrollZoom($('#slideContainer'), 3, 0.2)
    }, [])

    return (    
        <div className={classes.container}>
            <Header title="2020/2021" />
            <div id="slideContainer" className={classes.content}>
                <div className={classes.box}>
                    {courses.map(course => (
                        <Course course={course} key={course.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;