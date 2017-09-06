import React, {Component} from 'react';
import { fetchStreamingData } from "../action_creators/patternActions";
import { connect } from "react-redux";
import Header from './Header';
import DotsContainer from './DotsContainer';
import InfoBar from './InfoBar';
import NavBar from './NavBar';
import SubHeader from './SubHeader';

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            SubHeader:"Create Pattern"
        }
    }
    componentWillMount()
    {
        fetchStreamingData();
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("received"+JSON.stringify(nextProps.tweets))
        if(nextProps.verify!=undefined)
            {
                if(nextProps.verify==true)
                    {
                        this.setState({SubHeader:"Verify Pattern"})
                    }
                else
                    {
                        this.setState({SubHeader:"Create Pattern"})
                    }
            }
    }
    render()
    {
        return(<div>
            <Header/>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2 nav-section">
                        <NavBar/>
                    </div>
                    <div className="vr col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <SubHeader subhead={this.state.SubHeader}/>
                        <DotsContainer/>
                    </div>
                    <div className="vr col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <InfoBar/>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default connect(state => (
    {
        tweets: state.streamReducer.tweets,
        count: state.streamReducer.count,
        verify:state.streamReducer.verify
    }
))(Main);