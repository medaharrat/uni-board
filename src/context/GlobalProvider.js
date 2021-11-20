import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

const initialState = {
    courses: [
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
                        {id: 1, comment: "Material is really interesting!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40]},
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
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40]},
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
                        {id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 3, date: "10/09/2021", color: "#f5f5dc", size: [40, 40]},
                        {id: 2, comment: "Awesome!", student_id: 1, course_id: 3, date: "16/09/2021", color: "#f5f5dc", size: [40, 40]},
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
}

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <UserContext.Provider value={{
            courses: state.courses, 
        }}>
            { children }    
        </UserContext.Provider>
    )
}