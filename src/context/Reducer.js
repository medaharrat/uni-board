const AppReducer = (state, action) => {
    switch(action.type){
        case 'ACTION_TYPE':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default AppReducer;