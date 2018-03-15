const ToolReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOOL': // eslint-disable-next-line
            let newTool = {data: action.payload, id: +new Date};
            return state.concat([newTool]);
        default:
            return state || []
    }
};

export default ToolReducer