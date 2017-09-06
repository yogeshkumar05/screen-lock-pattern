import React, {Component} from 'react';
import { connect } from "react-redux";
class InfoBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentPattern:"",
            patternToVerify:""
        }
    }   
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.currentPattern!=undefined)
        this.setState({currentPattern:nextProps.currentPattern})

        if(nextProps.patternToVerify!=undefined)
            this.setState({patternToVerify:nextProps.patternToVerify})

        if(nextProps.matchStatus!=undefined)
            this.setState({matchStatus:nextProps.matchStatus})
    }

    render()
    {
        return(<div className="info-bar">
            <div className="current-info">Current Pattern:{this.state.currentPattern}</div>
            <div className="current-info">Verify Pattern:{this.state.patternToVerify}</div>
            <div className="current-info"><strong>{this.state.matchStatus}</strong></div>
            </div>)
    }
}
export default connect(state => (
    {
        currentPattern:state.patternReducer.currentPattern,
        patternToVerify:state.patternReducer.patternToVerify,
        matchStatus:state.patternReducer.matchStatus

    }
))(InfoBar);
