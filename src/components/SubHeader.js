import React, {Component} from 'react';

export default class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }   

    render()
    {
        return(<h3>
            {this.props.subhead}
            </h3>)
    }
}
