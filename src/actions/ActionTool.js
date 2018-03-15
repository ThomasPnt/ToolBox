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

export const hideAddTool = () => ({type: 'HIDE_ADD_TOOL'});
export const showAddTool = () => ({type: 'SHOW_ADD_TOOL'});
export const hideAddCategory = () => ({type: 'HIDE_ADD_CATEGORY'});
export const showAddCategory = () => ({type: 'SHOW_ADD_CATEGORY'});
