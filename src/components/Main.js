import React, {Component} from 'react';
import { fetchStreamingData } from "../action_creators/patternActions";
import { connect } from "react-redux";
import Header from './Header';
import DotsContainer from './DotsContainer';
import InfoBar from './InfoBar';
import NavBar from './NavBar';
import SubHeader from './SubHeader';
import {createAction, updateAction, clearAction, startVerify, clearPatternAction} from '../action_creators/patternActions';
import Footer from './Footer';
import CONSTANTS from '../common/patternConstants';

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            SubHeader:CONSTANTS.SUBHEADER_CREATE
        }
    }

    startVerification()
    {
        startVerify();
    }

    clearPattern()
    {
        clearPatternAction();
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.verify!=undefined)
            {
                if(nextProps.verify==true)
                    {
                        this.setState({SubHeader:CONSTANTS.SUBHEADER_VERIFY})
                    }
                else
                    {
                        this.setState({SubHeader:CONSTANTS.SUBHEADER_CREATE})
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
                        <NavBar startVerification={this.startVerification} clearPattern={this.clearPattern}/>
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
            <hr/>
            <Footer/>
        </div>)
    }
}
export default connect(state => (
    {
        verify:state.patternReducer.verify
    }
))(Main);