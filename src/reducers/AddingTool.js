const AddingTool = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_TOOL':
            return true;
        case 'HIDE_ADD_TOOL':
            return false;
        default:
            return !!state;
    }
};

export default AddingTool;
