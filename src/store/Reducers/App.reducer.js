import {handleActions as createReducers} from 'redux-actions'
import {INCREMENT, DECREMENT} from '../ActionTypes/App.action.type'
const initialState = {
  appCount: 0
}

export default createReducers({
  [INCREMENT]: (state,action) => ({
    appCount: state.appCount+action.payload
  }),
  [DECREMENT]: (state,action) => ({
    appCount: state.appCount-action.payload
  }),
  default: (state,action) => ({
    appCount: state.appCount
  })
},initialState)
