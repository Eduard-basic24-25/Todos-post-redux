 import Item from './Item';
 import { useSelector } from 'react-redux';


 function List () {

    const list = useSelector( (state) => state.articles.list);
    
  
    return !list.length ? (<h2>No article</h2>) : (
        <div className="d-flex flex-wrap justify-content-between gap-5 p-5">
            {
                list.map( article => <Item key={article.id} article={article}/>)
            }
        </div>
    )
}

export default List;