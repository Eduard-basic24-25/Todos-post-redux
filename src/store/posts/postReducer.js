import { ADD_ARTICLE, REMOVE_ARTICLE } from './actions';



const initialState = {
    list: [
        {id:1, title: 'Article 1', content:'something new' },
        {id:2, title: 'Article 2', content:'something new'},
        {id:3, title: 'Article 3', content:'something new'},
        {id:4, title: 'Article 4', content:'something new'},
    ],
} 

function articleReducer ( state = initialState, {type, payload}) {

    switch (type) {
        case ADD_ARTICLE:
            return {...state, list:[...state.list, payload]};
            state.push(ADD_ARTICLE)
        case REMOVE_ARTICLE:
            return {...state, list:[...state.list.filter( item => item.id !== payload)]}
        default: return state;
    }
}


export default articleReducer;