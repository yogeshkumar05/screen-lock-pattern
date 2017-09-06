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
            <div className="current-info">{this.state.matchStatus}</div>
            </div>)
    }
}
export default connect(state => (
    {
        tweets: state.streamReducer.tweets,
        count: state.streamReducer.count,
        currentPattern:state.streamReducer.currentPattern,
        patternToVerify:state.streamReducer.patternToVerify,
        matchStatus:state.streamReducer.matchStatus

    }
))(InfoBar);
