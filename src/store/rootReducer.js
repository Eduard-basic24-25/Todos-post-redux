import todosReducer from './todos/todosReducer';
import articleReducer from './posts/postReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({

    todos: todosReducer,
    articles:articleReducer
           

})

export default rootReducer;


