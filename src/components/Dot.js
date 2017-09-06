import React, {Component} from 'react';

export default class Dot extends Component
{
    constructor(props)
    {
        super(props);
        this.mouseOverHandler=this.mouseOverHandler.bind(this);
        this.mouseDownHandler=this.mouseDownHandler.bind(this);
        // this.mouseUpHandler=this.mouseUpHandler.bind(this);
    }
    componentWillMount()
    {
        // window.addEventListener('mousedown', ()=>{console.log("mouse down"+this.props.id)})
        // window.addEventListener('mouseup', ()=>{console.log("mouse up"+this.props.id)})
    }
    // mouseUpHandler()
    // {
    //     this.props.clearPattern();
    // }

    mouseOverHandler(event)
    {
        console.log("over"+this.props.id)
        var x = event.clientX;
        var y = event.clientY;
        console.log("coords..."+x+" "+y)
        this.props.update(this.props.id, x, y)
    }

    mouseDownHandler(event)
    {
        var x = event.clientX;
        var y = event.clientY;
        console.log("coords..."+x+" "+y)
        console.log(this.props.id,x,y)
        this.props.create(this.props.id,x,y);
    }

    render()
    {
        let style={};
        switch(this.props.id)
        {
            case 1:
                style={     'position': 'absolute',
                    'left': '30' }
                    break;
                    case 2:
                    style={     'position': 'absolute',
                        'left': '230' }
                        break;
                        case 3:
                        style={     'position': 'absolute',
                            'left': '430' }
                            break;
                            case 4:
                            style={     'position': 'absolute',
                            'left': '30',
                            'top': '300'
                                 }
                                break;
                                case 5:
                                style={     'position': 'absolute',
                                    'left': '230',
                                'top':'300' }
                                    break;
                                    case 6:
                                    style={     'position': 'absolute',
                                        'left': '430',
                                    'top':'300' }
                                        break;
                                        case 7:
                                        style={     'position': 'absolute',
                                            'left': '30',
                                        'top':'450' }
                                            break;
                                            case 8:
                                            style={     'position': 'absolute',
                                                'left': '230',
                                                'top':'450'

                                             }
                                                break;
                                                case 9:
                                                style={     'position': 'absolute',
                                                    'left': '430',
                                                'top':'450' }
                                                    break;
        }
    return(<span style={style} className="dot-component" onMouseOver={this.mouseOverHandler} onMouseDown={this.mouseDownHandler}></span>);
    }
}
