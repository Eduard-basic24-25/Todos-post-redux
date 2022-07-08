import { ADD_ARTICLE , REMOVE_ARTICLE } from './actions'


function addArticle (title,content) {
    return {
        type: ADD_ARTICLE,
        payload: {
            title,
            content,
            id: Date.now(),
        }
    } 
}
function removeArticle (id) {
    return {
        type: REMOVE_ARTICLE,
        payload: id
    }
}

export { addArticle, removeArticle };