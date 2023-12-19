const initialState = {
    name: 'kvnzl'
}


const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'washere'
        }
    }
    return state;
}

export default globalReducer;