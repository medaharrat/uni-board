import React, { useState, useContext } from "react";
import { useStyles } from "./styles.js";
import { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Course from "../../components/Course/index";
import Header from "../../components/Header/index";
import ScrollZoom from "../../utils/scrollZoom";
import ScrollDrag from "../../utils/scrollDrag";
import { 
    useCourseState,
    useCourseDispatch,
    getCourses
} from "../../context";
import { useRouter } from 'next/router';
import $ from 'jquery';

const Board = () => {
    const classes = useStyles();
    const router = useRouter();
    const [scale, setScale] = useState(100);
    const [gridView, setGridView] = useState(false);
    const currentUser = localStorage && localStorage.getItem('user');
    const { courses, loading } = useCourseState();
    const courseDispatch = useCourseDispatch();

    const toggleMode = () => setGridView(!gridView)
    
    useEffect(() => {
        if (!currentUser) {
            router.push('/login');
        } else {
            ScrollZoom($('#container'), 4, 0.4, setScale)
            ScrollDrag($('#container'))
            getCourses(courseDispatch)
        }
    }, [])
    
    return (    
        <div className={classes.container}>
            <Header title="2020/2021" zoomIndex={scale} toggleMode={toggleMode} gridView={gridView}/>
            <div id="container" className={classes.content}>
                <Grid
                    container
                    direction={gridView ? 'column' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                >
                    { loading && <p>Loading courses ... </p>}
                    { courses && courses.map(course => (
                        <Course course={course} gridView={gridView} key={course.id}/>
                    ))}

                    { courses && courses.map(course => (
                        <Course course={course} gridView={gridView} key={course.id}/>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Board;