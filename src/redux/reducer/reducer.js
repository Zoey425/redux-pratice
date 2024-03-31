let initialState = {
    count: 0,
    id: 'id',
    password: 'password',
};

function reducer(state = initialState, action) {
    console.log('what is the action?', action);

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload.num };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'LOGIN':
            return { ...state, id: action.payload.id, password: action.payload.password };
        default:
            return { ...state };
    }
}

export default reducer;
