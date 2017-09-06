import CONSTANTS from '../common/patternConstants';
export default function reducer(state = {
  currentPattern:"",
  patternToVerify:"",
  verify:false,
  matchStatus:"",
  patternEnd:false
}, action) {

  switch (action.type) {
    case "CREATE_PATTERN":
    {
      if(state.verify===true)
        {
          let newPattern="";
          newPattern=newPattern.concat(action.payload);
          return Object.assign({}, state, {patternToVerify:newPattern})
        }
        else
          {
            let newPattern="";
            newPattern=newPattern.concat(action.payload);
            console.log("reducer"+newPattern)
            return Object.assign({}, state, {currentPattern:newPattern, patternEnd:false})
          }

          return state;
      

    }
    case "UPDATE_PATTERN":
    {
      if(state.verify==true)
        {
          let prevChar=state.patternToVerify[state.patternToVerify.length-1];
          if(prevChar!=undefined && prevChar!=action.payload)//if same dot not selected consecutively
            {
              let newPattern=state.patternToVerify;
              newPattern=newPattern.concat(action.payload);
              return Object.assign({}, state, {patternToVerify:newPattern})
            }
            return state;
        }
        else{
      let prevChar=state.currentPattern[state.currentPattern.length-1];
      if(prevChar!=undefined && prevChar!=action.payload && state.patternEnd==false)//if same dot not selected consecutively
        {
          let newPattern=state.currentPattern;
          newPattern=newPattern.concat(action.payload);
          return Object.assign({}, state, {currentPattern:newPattern})
        }
        return state;
      }
    }
    case "END_PATTERN":
    {
      if(state.verify==true && state.patternToVerify.length>0)
        {
          if(state.currentPattern==state.patternToVerify)
            return Object.assign({}, state, {matchStatus:CONSTANTS.PATTERN_MATCH, patternEnd:true})
          else
            return Object.assign({}, state, {matchStatus:CONSTANTS.PATTERN_NO_MATCH, patternEnd:true})
        }
        else
          {
            return Object.assign({}, state, {patternEnd:true})
          }
    }
    case "VERIFY_PATTERN":{
      if(state.currentPattern.length>0)
      return Object.assign({}, state, {verify:action.payload, patternToVerify:"", matchStatus:""})
    }

    case "CLEAR_PATTERN":{
      return Object.assign({}, state, {currentPattern:"",
      patternToVerify:"",
      verify:false,
      matchStatus:"",
      patternEnd:false})
    }
  }
  return state
}






