import Btn from "../ui/Btn";
import { removeTodo, completeTodo } from '../../store/todos/actionsCreater'
import { useDispatch } from "react-redux";


function Item ({todo}) {
    // console.log(todo)
    const dispatch = useDispatch();

    function removeHandler() {
        dispatch(removeTodo(todo.id))
    }
    function completeHandler() {
        dispatch(completeTodo(todo.id))
    }

    
    return (
        <div className={`d-flex justify-content-between align-items-center py-3 border-bottom`}>
            <p className={`${'w-25 fs-3'} ${todo.completed ? `text-danger text-decoration-line-through fw-bold fs-3}` : ''}`}>{todo.title}</p>
            <Btn 
                className={'btn btn-success'}
                label='Completed'
                clickHandler={completeHandler}
            />
            <Btn 
                className={'btn btn-danger'}                
                label='Remove'
                clickHandler={removeHandler}    
            />
        </div>
    )
};

export default Item;