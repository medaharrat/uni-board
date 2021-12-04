import React, { createContext, useContext, useReducer } from 'react';
import { CourseReducer, initialState } from '../reducers/auth.courses';

// Create context
const CourseStateContext = createContext();
const CourseDispatchContext = createContext();

// Hooks
export function useCourseState() {
  const context = useContext(CourseStateContext);
  if (context === undefined) {
    throw new Error("useCourseState must be used within a CoursesProvider.");
  }

  return context;
}

export function useCourseDispatch() {
  const context = useContext(CourseDispatchContext);
  if (context === undefined) {
    throw new Error("useCourseDispatch must be used within a CoursesProvider.");
  }

  return context;
}

// Authentification Provider
export const CoursesProvider = ({ children }) => {
  const [courses, dispatch] = useReducer(CourseReducer, initialState);
 
  return (
    <CourseStateContext.Provider value={courses}>
      <CourseDispatchContext.Provider value={dispatch}>
        {children}
      </CourseDispatchContext.Provider>
    </CourseStateContext.Provider>
  );
};