import React, {Component} from 'react';
import {createAction, updateAction, clearAction, startVerify} from '../action_creators/patternActions';

export default class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }   

    render()
    {
        return(<div>
            <button onClick={()=>{startVerify()}} >Verify Pattern</button>
            <button onClick={()=>{startVerify()}} >Create Pattern</button>
            </div>)
    }
}
