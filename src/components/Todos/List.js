import Item from './Item';
import { useSelector } from 'react-redux'


function List () {

    const list = useSelector( (state) => state.todos.list)

    // const list = [];
    return !list.length ? (<h2>No todos</h2>) : (
        <div className="p-3">
            {
                list.map( todo => <Item key={todo.id} todo={todo}/>)
            }
        </div>
    )
}

export default List;