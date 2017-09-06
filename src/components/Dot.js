import React, {Component} from 'react';
import {createDotStyles} from '../common/patternUtil.js';

export default class Dot extends Component
{
    constructor(props)
    {
        super(props);
        this.mouseOverHandler=this.mouseOverHandler.bind(this);
        this.mouseDownHandler=this.mouseDownHandler.bind(this);
    }
    mouseOverHandler(event)
    {
        var x = event.clientX;
        var y = event.clientY;
        this.props.update(this.props.id, x, y)
    }

    mouseDownHandler(event)
    {
        event.preventDefault();
        var x = event.clientX;
        var y = event.clientY;
        this.props.create(this.props.id,x,y);
    }

    render()
    {
        let style=createDotStyles(this.props.id);
    return(<span style={style} className="dot-component" onMouseOver={this.mouseOverHandler} onMouseDown={this.mouseDownHandler} onMouseUp={()=>{this.props.endPattern}}></span>);
    }
}
