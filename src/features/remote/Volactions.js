import {useSelector, useDispatch} from "react-redux";
import { increase, decrease } from "./volumeSlice";

const Volactions = () => {
    const power = useSelector((state) => state.turn.power);
    const dispatch = useDispatch();

    const volIn = () => {
        if ( power === 'on' ){
          dispatch(increase())
        }
        else {return (null)};
    }

    const volDe = () => {
        if ( power === 'on' ){
          dispatch(decrease())
        }
        else {return (null)};
    }

    return(
        <div className="Volume">
            <button className="Vlu" onClick = {volIn}>+</button>
            <button className="Vlu" onClick = {volDe}>-</button>
        </div>
    );
}
export default Volactions