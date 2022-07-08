import { useState } from "react";
import { useDispatch } from "react-redux";
import {addArticle} from '../../store/posts/actionsCreater'
import Btn from "../ui/Btn";

function Form () {
    const [title, SetTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    function handlerArticle (e) {
        e.preventDefault(); 
        dispatch(addArticle(title,content));
        // dispatch(addArticle(content)); ???? 
        SetTitle('');
        setContent('');
    }


    return (
            <form action="">
                <div className="mb-3 p-3">
                    <input 
                        className="d-block form-control mb-3"
                        type="text" 
                        value={title}
                        onChange={ (e) => SetTitle(e.target.value)}
                    />
                    <textarea 
                        className="d-block form-control mb-3"
                        content={content}
                        onChange={ (e) => setContent(e.target.value)}    
                    ></textarea>
                    <div className="d-grid gap-2">
                        <Btn 
                            className={'btn btn-secondary mb-5'}
                            type='submit' 
                            label='Submit' 
                            clickHandler={handlerArticle}
                        />
                    </div>
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
    ) 
};


export default Form;