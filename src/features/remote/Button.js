import React from 'react';

function Button(props){
    return(
        <button 
        onClick ={props.onClick} 
        className='channelbutton'>
        {props.count}</button>
    )
}
export default Button;



