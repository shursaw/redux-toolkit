import { useEffect } from "react";
import { fetchUsers, deleteUser } from "../../store/tableReducer";
import {useDispatch, useSelector} from "react-redux";
import "./table.css"

const Table = () => {
    const dispatch = useDispatch();
    const {names, status, error} = useSelector(state => state.table);

    useEffect(() => {
        dispatch(fetchUsers())
    },[dispatch])

    function toDelete(item) {
        //console.log(item)
        dispatch(deleteUser(item))
    }
    return (
        <div className="table">
           {status=="loading" && <h2>Loading....</h2>}
           {error && <h2>ERROR : {error}</h2>}
           <ul className="toDoList">
                {names.map(item => (
                    (
                            <li key={item.id}><h3>{item.name}</h3><button onClick={()=>toDelete(item)}>X</button></li>
                    )
                ))
                    }</ul>
        </div>
    )
}

export default Table;