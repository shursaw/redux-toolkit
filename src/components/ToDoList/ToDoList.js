import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {

    const todo = useSelector(state => state.todo.todos);

    return(
        <div className="list">
            {   
                <ul className="toDoList">
                {todo.map(item => (
                    (
                            <li key={item.id}><ToDoItem  itemT={item}/></li>
                    )
                ))
                    }</ul>        
            }
        </div>
    )
}

export default ToDoList;