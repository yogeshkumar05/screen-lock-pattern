import React, {Component} from 'react';

export default function NavBar(props)
{ 
    return(<div>
            <button onClick={()=>{props.startVerification()}} >Verify Pattern</button>
            <button onClick={()=>{props.clearPattern()}} >Create Pattern</button>
        </div>)   
}
