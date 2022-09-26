import "./counter.css"
import {useDispatch, useSelector} from "react-redux";
import { ADD, DEC } from "../../store/counterReducer";


const Counter = () => {

    const dispatch = useDispatch();

    const val = useSelector(state => state.counter.count);

    const add = () => {
        dispatch(ADD(10));
    }

    const dec = () => {
       dispatch(DEC(10)); 
    }


    return (
        <div className="counter">
            <div>
                <div className="val">{val}</div>
                    <div>
                        <button className="but" onClick={add}>ADD 10</button>
                        <button className="but" onClick={dec}>DEC 10</button>
                    </div>
            </div>
        </div>

    )
}

export default Counter;