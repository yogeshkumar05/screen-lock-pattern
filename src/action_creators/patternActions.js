import axios from "axios";
import store from './../store'
var count = 0;
export function fetchStreamingData() {
  count++;//increment the api call number
  axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    .then((response) => {
      response.data.count = count;
      store.dispatch({ type: "FETCH_STREAM_FULFILLED", payload: response.data })
    })
    .catch((err) => {
      store.dispatch({ type: "FETCH_STREAM_REJECTED", payload: err })
    })
}

export function createAction(char)
{
  console.log("actioncreatePattern"+char)
  store.dispatch({type:"CREATE_PATTERN", payload:char});
}

export function updateAction(char)
{
  console.log("actionupdatePattern"+char)
  store.dispatch({type:"UPDATE_PATTERN", payload:char});
}

export function clearAction()
{
  store.dispatch({type:"CLEAR_PATTERN", payload:""});
}

export function startVerify()
{
  store.dispatch({type:"VERIFY_PATTERN", payload:true});
}

