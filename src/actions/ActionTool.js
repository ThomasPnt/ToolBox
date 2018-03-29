export function addTool(data) {
    return {
        type: 'ADD_TOOL',
        payload: data
    };
}

export function addCategory(data) {
    return {
        type: 'ADD_CATEGORY',
        payload: data
    }
}

export function selectTool(data) {
    return {
        type: 'SELECT_TOOL',
        payload: data
    }
}

export function filterCat(data){
    return {
        type: 'SET_FILTER_CATEGORY',
        payload: data
    }
}

export const showDesc = () => ({type: 'SHOW_DESC'});
export const hideDesc = () => ({type: 'HIDE_DESC'});
export const hideAddTool = () => ({type: 'HIDE_ADD_TOOL'});
export const showAddTool = () => ({type: 'SHOW_ADD_TOOL'});
export const hideAddCategory = () => ({type: 'HIDE_ADD_CATEGORY'});
export const showAddCategory = () => ({type: 'SHOW_ADD_CATEGORY'});
