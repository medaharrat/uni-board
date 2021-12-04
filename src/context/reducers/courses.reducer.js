
export const initialState = {
  courses: [],
  loading: false,
  errorMessage: null
};
  
export const CourseReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...initialState,
        loading: true
      };
    case "GET_COURSES_SUCCESS":
      return {
        ...initialState,
        courses: action.payload,
        loading: false
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        course: action.payload.course,
        loading: false
      };
    case "DELETE_SUCCESS":
      return {
        ...initialState,
        loading: false
      };
    case "ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
  
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};