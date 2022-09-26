import "./todoItem.css"
import {useDispatch} from "react-redux";
import { DEL_TODO, TOGGLE_DONE } from "../../store/todoReducer";

const ToDoItem = ({itemT}) => {

    const dispatch = useDispatch();

    const deleteTask = (id) => {
        dispatch(DEL_TODO(id))
    }

    const doneTask = (id) => {
        dispatch(TOGGLE_DONE(id))
    }

    return (
        <div className={`task ${itemT.completed ? 'comp-task' : ''}`}>
            <span onClick={()=>doneTask(itemT.id)}>{itemT.task}</span>
            <button className="btn" onClick={()=>deleteTask(itemT.id)} >Delete</button>
        </div>
    )
}

export default ToDoItem;