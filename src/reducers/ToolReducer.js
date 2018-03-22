const initialState = {
    ActualTool: [],
    Tool: []
};

const ToolReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOOL': // eslint-disable-next-line
            let newTool = {data: action.payload, id: +new Date};
            return Object.assign({}, state, {
                Tool: state.Tool.concat(newTool)
            });
        case 'SELECT_TOOL':
            let focus = state.Tool.find( tool => tool.id === action.payload)
            return Object.assign({}, state, {
                ActualTool: focus
            });
        default:
            return state
    }
};

export default ToolReducer