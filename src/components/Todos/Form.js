import Btn from "../ui/Btn";
import { addTodo } from "../../store/todos/actionsCreater";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function Form () {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

   
    function addHandler (e) {
        e.preventDefault();
        dispatch(addTodo(title));
        setTitle('');
    }


    return (
        <form action="">
            <div className="mb-3 p-3">
                <input 
                    className="form-control mb-3"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Todo'
                />
                <div className="d-grid gap-2">
                    <Btn 
                        className={'btn btn-secondary mb-5'}
                        type='submit' 
                        label='Submit' 
                        clickHandler={addHandler}/>
                </div>
            </div>
        </form>
    )
};

export default Form;