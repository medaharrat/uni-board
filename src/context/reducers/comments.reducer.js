
export const initialState = {
    comments: [], 
    comment: [], 
    loading: false,
    errorMessage: null
  };
    
  export const CommentsReducer = (initialState, action) => {
    switch (action.type) {
      case "REQUEST":
        return {
          ...initialState,
          loading: true
        };
      case "GET_COMMENTS_SUCCESS":
        return {
          ...initialState,
          comments: action.payload.comments,
          loading: false
        };
      case "ADD_COMMENT_SUCCESS":
        return {
          ...initialState,
          loading: false
        };
      case "DELETE_COMMENT_SUCCESS":
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