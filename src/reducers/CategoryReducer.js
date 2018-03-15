const CategoryReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CATEGORY': // eslint-disable-next-line
            let newCategory = {name: action.payload, id: +new Date};
            return state.concat([newCategory]);
        default:
            return state || [];
    }
};

export default CategoryReducer;


