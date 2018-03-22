const SeeCodeReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_DESC':
            return true;
        case 'HIDE_DESC':
            return false;
        default:
            return !!state;
    }
};

export default SeeCodeReducer;
