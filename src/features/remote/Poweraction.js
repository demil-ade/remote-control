import {useSelector, useDispatch} from "react-redux";
import {constantone, emptyone} from './channelSlice';
import { start, stop } from "./powerSlice";
import { constant, empty } from "./volumeSlice";

const Poweraction = ()=> {
    const power = useSelector((state) => state.turn.power);
    const dispatch = useDispatch();

    const handleClick= () =>{
        if (power ==="off"){
            dispatch(start())
            dispatch(constant())
            dispatch(constantone())

        }
        else if (power ==="on"){
            dispatch(stop())
            dispatch(emptyone())
            dispatch(empty())
        }
    }
    return(
        <div className="powerbutton">
            <button className="on" onClick = {handleClick}>Power</button>
        </div>
    );
}
export default Poweraction