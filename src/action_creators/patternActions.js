import store from './../store'

export function createAction(char)
{
  store.dispatch({type:"CREATE_PATTERN", payload:char});
}

export function updateAction(char)
{
  store.dispatch({type:"UPDATE_PATTERN", payload:char});
}

export function endPatternAction()
{
  store.dispatch({type:"END_PATTERN", payload:""});
}

export function startVerify()
{
  store.dispatch({type:"VERIFY_PATTERN", payload:true});
}

export function clearPatternAction()
{
  store.dispatch({type:"CLEAR_PATTERN", payload:""});
}


