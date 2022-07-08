import Form from "../Posts/Form";
import List from "../Posts/List";

function Posts () {
    return (
        <div className="todos">
            <Form/>
            <List/>
            {/* <input type="text" />
            <textarea></textarea>
            <button type="submit">Submit</button> */}
        </div>
    )
};

export default Posts;