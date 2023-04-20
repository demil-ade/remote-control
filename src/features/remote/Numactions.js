import { useDispatch, useSelector } from 'react-redux';
import { one, two, three, four, five,six, seven, eight, nine} from './channelSlice';
import Button from './Button';

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
        <div>
        
        <div className="numbers">
            <Button onClick = {First} count ='1'/>
            <Button onClick = {Second} count = '2'/>
            <Button onClick = {Third} count = '3'/>
            <Button onClick = {Fourth} count = '4'/>
            <Button onClick = {Fifth} count = '5'/>
            <Button onClick = {Sixth} count = '6'/>
            <Button onClick = {Seventh} count = '7'/>
            <Button onClick = {Eighth} count = '8'/>
            <Button onClick = {Ninth} count = '9'/>
            

        </div>
        </div>
    )
}
export default Numactions;