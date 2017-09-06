export default function reducer(state = {
  tweets: [],
  error: null,
  count: 1,//for displaying the api call number
  currentPattern:"",
  patternToVerify:"",
  verify:false,
  matchStatus:"",
  patternEnd:false
}, action) {

  switch (action.type) {
    case "FETCH_STREAM_REJECTED": {
      return Object.assign({}, state, { error: action.payload })
    }
    case "FETCH_STREAM_FULFILLED": {
      return Object.assign({}, state, { tweets: action.payload, count: action.payload.count });
    }
    case "CREATE_PATTERN":
    {
     // alert(state.verify)
      if(state.verify===true)
        {
          let newPattern="";
          newPattern=newPattern.concat(action.payload);
          console.log("reducer"+newPattern)
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
          if(prevChar!=action.payload)//if same dot not selected consecutively
            {
              let newPattern=state.patternToVerify;
              newPattern=newPattern.concat(action.payload);
              return Object.assign({}, state, {patternToVerify:newPattern})
            }
            return state;
        }
        else{
      let prevChar=state.currentPattern[state.currentPattern.length-1];
      if(prevChar!=action.payload && state.patternEnd==false)//if same dot not selected consecutively
        {
          let newPattern=state.currentPattern;
          newPattern=newPattern.concat(action.payload);
          return Object.assign({}, state, {currentPattern:newPattern})
        }
        return state;
      }
    }
    case "CLEAR_PATTERN":
    {
      if(state.verify==true)
        {
          if(state.currentPattern==state.patternToVerify)
            return Object.assign({}, state, {matchStatus:"Patterns Match", verify:false})
          else
            return Object.assign({}, state, {matchStatus:"Patterns Don't Match", verify:false})
        }
        else
          {
            return Object.assign({}, state, {patternEnd:true})
          }
    }
    case "VERIFY_PATTERN":{
      //alert(action.payload)
      return Object.assign({}, state, {verify:action.payload})
    }
  }
  return state
}






