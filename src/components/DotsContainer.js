import React, {Component} from 'react';
import Dot from './Dot';
import {createAction, updateAction, endPatternAction, startVerify} from '../action_creators/patternActions';

export default class DotsContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentPattern:"",
            newPattern:true,
            verify:false,
            patternToVerify:"",
            newX:0,
            newY:0,
            xArr:[],
            yArr:[]
        }
        this.createPattern=this.createPattern.bind(this);
        this.updatePattern=this.updatePattern.bind(this);
        this.endPattern=this.endPattern.bind(this);
    }

    createPattern(id, x, y)
    {
        createAction(id);
    }

    updatePattern(id, x, y)
    {
        updateAction(id)    
    }

    endPattern()
    {
         endPatternAction();
    }


    render()
    {
        let patterns=[];
        for(let i=1;i<10;i++)
            {
                patterns.push(<Dot id={i} create={this.createPattern} update={this.updatePattern} endPattern={this.endPattern} />)
            }
        return(<div><div className="pattern-container" onMouseUp={this.endPattern}>
             
            {patterns}
            </div>
            </div>)
    }
}
