import { useDispatch, useSelector } from 'react-redux';
import { one, two, three, four, five,six, seven, eight, nine} from './channelSlice';

const Numactions = () => {
    const power = useSelector((state) => state.turn.power);
    const dispatch = useDispatch();

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

    return(
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
    )
}
export default Numactions;