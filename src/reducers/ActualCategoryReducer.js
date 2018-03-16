const initialState = {
    actual: "All Category"
};

const ActualCategoryReducer = (state = initialState.actual , action) => {
    switch (action.type){
        case 'ACTUAL_CATEGORY':
            return {
                actual : action.payload
            };
        default:
            return state || []
    }
};

export default ActualCategoryReducer