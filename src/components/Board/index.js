import React, { useState, useContext } from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Course from "../../components/Course/index";
import Header from "../../components/Header/index";
import ScrollZoom from "../../utils/scrollZoom";
import ScrollDrag from "../../utils/scrollDrag";
import { useCourseState } from "../../context";
import $ from 'jquery';

const Board = () => {
    const classes = useStyles();
    const [scale, setScale] = useState(100);
    const { courses } = useCourseState();

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