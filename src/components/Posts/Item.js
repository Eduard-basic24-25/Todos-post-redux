import { useDispatch } from "react-redux";

import Btn from "../ui/Btn";
import  {removeArticle} from '../../store/posts/actionsCreater'


function Item ({article}) {
    
    const dispatch = useDispatch();

    function removeHandler () {
        dispatch(removeArticle(article.id))
    }



    return (
        <div className="w-25">
            <p className="text-center fw-bold fs-4">{article.title}</p>
            <p className="text-center fst-italic fs-5">{article.content}</p>
            <div className="d-grid">
                <Btn 
                    className={'btn btn-danger'}
                    label='Remove'
                    clickHandler={removeHandler}
                />
            </div>
        </div>
    )
};

export default Item;