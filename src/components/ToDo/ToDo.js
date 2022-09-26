import { useState } from "react";
import ToDoList from "../ToDoList/ToDoList";
import {useDispatch} from "react-redux";
import "./todo.css"
import { ADD_TODO } from "../../store/todoReducer";
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    const [newItem, setNewItem] = useState('');

    const dispatch = useDispatch();

    const oneTodo ={
        id: uuidv4(),
        task: newItem,
        completed: false
    }

    const toSubmit = (e) => {
        e.preventDefault();
        //console.log('sdf');
        if (newItem.trim() !== '') {
            dispatch(ADD_TODO(oneTodo));
        }
        setNewItem('');
    }
    
    return (
        <div className="container">
            <form className="form" onSubmit={(e)=>toSubmit(e)}>
                 <label htmlFor="item">Input task</label>
                 <input value= {newItem} type="text" name="item" id="item" onChange={(e)=>setNewItem(e.target.value)} placeholder="input task"/>
                 <input type="submit" value="Add item"/>
            </form>
            <ToDoList/>
        </div>
    )
}

export default ToDo;