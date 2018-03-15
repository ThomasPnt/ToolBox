const AddingCategory = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_CATEGORY':
            return true;
        case 'HIDE_ADD_CATEGORY':
            return false;
        default:
            return !!state;
    }
};

export default AddingCategory;
