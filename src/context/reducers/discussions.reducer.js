
export const initialState = {
    discussions: [], 
    discussion: [], 
    loading: false,
    errorMessage: null
  };
    
  export const DiscussionsReducer = (initialState, action) => {
    switch (action.type) {
      case "REQUEST":
        return {
          ...initialState,
          loading: true
        };
      case "GET_DISCUSSIONS_SUCCESS":
        return {
          ...initialState,
          discussions: action.payload.discussions,
          loading: false
        };
      case "ADD_DISCUSSION_SUCCESS":
        return {
          ...initialState,
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