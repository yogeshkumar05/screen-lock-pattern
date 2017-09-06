import React, {Component} from 'react';
import Dot from './Dot';
import {createAction, updateAction, clearAction, startVerify} from '../action_creators/patternActions';

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
        this.clearPattern=this.clearPattern.bind(this);
    }

    createPattern(id, x, y)
    {
        createAction(id);
        // console.log("createPattern"+x+" "+y);
        // if(this.state.verify==true)
        //     {
        //         let patternToVerify="";
        //         patternToVerify=patternToVerify.concat(id);
        //         this.setState({patternToVerify:patternToVerify, newPattern:false});
        //         console.log("Create=>patternToVerify"+patternToVerify)
        //     }
        //     else{
        //         let xArr=this.state.xArr;
        //         let yArr=this.state.yArr;
        //         xArr.push(x);
        //         yArr.push(y);
        //         let newPattern="";
        //         newPattern=newPattern.concat(id);
        //         this.setState({currentPattern:newPattern,xArr, yArr, newPattern:false});
        //         console.log("Create=>currentPattern"+newPattern)
        //         console.log("xArr"+xArr)
        //     }
        // //alert(id)
        
    }

    updatePattern(id, x, y)
    {
        updateAction(id)
    //     if(this.state.verify==true)
    //         {
    //             let prevChar=this.state.patternToVerify[this.state.patternToVerify.length-1];
    //             if(this.state.newPattern!=true && prevChar!=id)
    //                 {
                        
    //             let newPattern=this.state.patternToVerify.concat(id);
    //             this.setState({patternToVerify:newPattern, newx:x, newY:y});
    //             console.log("Update=>patternToVerify"+this.state.patternToVerify)
    //         }
    //     }
    //     else
    //         {
    //             let prevChar=this.state.currentPattern[this.state.currentPattern.length-1];
    //             if(this.state.newPattern!=true && prevChar!=id)
    //                 {
    //                     let xArr=this.state.xArr;
    //                     let yArr=this.state.yArr;
    //                     xArr.push(x);
    //                     yArr.push(y);
    //             let newPattern=this.state.currentPattern.concat(id);
    //             this.setState({currentPattern:newPattern,xArr, yArr,  newX:x, newY:y});
    //             console.log("Update=>currentPattern"+this.state.currentPattern)
    //         }
        
    // }
    
}

    verifyPattern()
    {

    }
    clearPattern()
    {
         clearAction();
        // if(this.state.verify==true)
        //     {
        //         console.log("finalCurre"+this.state.currentPattern)
        //         console.log("finalVerify"+this.state.patternToVerify);
        //         if(this.state.currentPattern==this.state.patternToVerify)
        //             {
        //                 alert("match")
        //             }
        //         else
        //             alert("no match")
        //     }
        //     else
        //         {
        //             console.log("final pattern"+this.state.currentPattern)
        //         }
        
        // this.setState({
        //     newPattern:true, verify:false, xArr:[], yArr:[]
        // })
    }


    render()
    {
        let currentX=this.state.xArr[this.state.xArr.length-1];
        let currentY=this.state.yArr[this.state.yArr.length-1];
        console.log("currentX"+currentX);
        console.log("currentY"+currentY);
        let patterns=[];
        for(let i=1;i<10;i++)
            {
                patterns.push(<Dot id={i} create={this.createPattern} update={this.updatePattern} clearPattern={this.clearPattern} />)
            }
        return(<div><div className="pattern-container" onMouseUp={this.clearPattern}>
            {patterns}
            </div>
            </div>)
    }
}
