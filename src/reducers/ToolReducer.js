const initialState = {
    ActualTool: [],
    Tool: [],
    filtered: []
};

const ToolReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOOL': // eslint-disable-next-line
            let newTool = {data: action.payload, id: +new Date};
            return Object.assign({}, state, {
                Tool: state.Tool.concat(newTool)
            });
        case 'SELECT_TOOL':
            let focus = state.Tool.filter(tool => tool.id === parseInt(action.payload, 10));
            return Object.assign({}, state, {
                ActualTool: focus
            });
        case 'FILTER_TOOL':
            let filter = state.Tool.filter(tool => tool.data.category === action.payload);
            return Object.assign({}, state, {
                filtered: filter
            });
        case 'SHOW_ALL':
            return Object.assign({}, state, {
                filtered: state.Tool
            });
        default:
            return state
    }
};

export default ToolReducer