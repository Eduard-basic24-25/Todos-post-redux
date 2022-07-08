import { REMOVE_ITEM,
    ADD_ITEM,
    COMPLETE_ITEM,
} from './actions';

const initialState = {
    list: [
        {id:1, title: 'Todo 1', completed: false},
        {id:2, title: 'Todo 2', completed: false},
        {id:3, title: 'Todo 3', completed: false},
        {id:4, title: 'Todo 4', completed: true},
    ],
}

function todosReducer (state = initialState, { type, payload }) {
    switch (type){

        case ADD_ITEM:
            return {...state, list:[...state.list, payload]}

        case  REMOVE_ITEM:
            return {...state, list:[...state.list.filter( item => item.id !== payload)]}

        case COMPLETE_ITEM:
            return {
                ...state,
                list:state.list.map( item => {
                    if(item.id === payload){
                        return {
                            ...item, 
                            completed: !item.completed,
                        }
                    } 
                    return item; 
                })
            }

        default: return state;
    }
}

export default todosReducer;

