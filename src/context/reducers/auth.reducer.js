export const initialState = {
  user: "",
  loading: false,
  error: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    // Log in
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload,
        loading: false
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        error: action.error
      };
    // Log out
    case "LOGOUT":
      return {
        ...initialState,
        user: ""
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};