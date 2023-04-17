import {useSelector, useDispatch} from "react-redux";
import {constantone, emptyone, one, two, three, four, five,six, seven, eight, nine} from './channelSlice';
import { start, stop } from "./powerSlice";
import { increase, decrease, constant, empty } from "./volumeSlice";

const Remote = () => {
    const count = useSelector((state) => state.channel.count);
    const power = useSelector((state) => state.turn.power);
    const vol = useSelector((state) => state.volume.vol);
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


    const First = () =>{
        if (power === 'on'){
            dispatch(one())
        }
        else {return (null)}
    }

    const Second = () =>{
        if (power === 'on'){
            dispatch(two())
        }
        else {return (null)}
    }

    const Third = () =>{
        if (power === 'on'){
            dispatch(three())
        }
        else {return (null)}
    }

    const Fourth = () =>{
        if (power === 'on'){
            dispatch(four())
        }
        else {return (null)}
    }

    const Fifth = () =>{
        if (power === 'on'){
            dispatch(five())
        }
        else {return (null)}
    }

    const Sixth = () =>{
        if (power === 'on'){
            dispatch(six())
        }
        else {return (null)}
    }

    const Seventh = () =>{
        if (power === 'on'){
            dispatch(seven())
        }
        else {return (null)}
    }

    const Eighth = () =>{
        if (power === 'on'){
            dispatch(eight())
        }
        else {return (null)}
    }

    const Ninth = () =>{
        if (power === 'on'){
            dispatch(nine())
        }
        else {return (null)}
    }

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
        <div className="all">
            <div className="lists">
            <p>Power: {power}</p>
            <p>Volume: {vol}</p>
            <p>Channel: {count}</p>
            
            </div>
            <div className="powerbutton">
                <button className="on" onClick = {handleClick}>Power</button>
            </div>

            
            <div className="Volume">
                <button className="Vlu" onClick = {volIn}>+</button>
                <button className="Vlu" onClick = {volDe}>-</button>
            </div>
                
            <div className="numbers">
                <button className ="abutton" onClick = {First}>1</button>
                <button className ="abutton" onClick = {Second}>2</button>
                <button className ="abutton" onClick = {Third}>3</button>
                <button className ="abutton" onClick = {Fourth}>4</button>
                <button className ="abutton" onClick = {Fifth}>5</button>
                <button className ="abutton" onClick = {Sixth}>6</button>
                <button className ="abutton" onClick = {Seventh}>7</button>
                <button className ="abutton" onClick = {Eighth}>8</button>
                <button className ="abutton" onClick = {Ninth}>9</button>
                
            </div>
            
        </div>
    )
}

export default Remote