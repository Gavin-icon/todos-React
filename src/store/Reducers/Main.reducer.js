import {handleActions as createReducers} from 'redux-actions'
import {LOADTODO_SUCCESS, ADDTODO_SUCCESS,DELETETODO_SUCCESS, MODIFYTODO_SUCCESS, COMPLETETOTO_SUCCESS, UNCOMPLETETOTO_SUCCESS, CLEARCOMPLETETODO_SUCCESS} from '../ActionTypes/App.action.type'
const initialState = {
  todos: []
}

export default createReducers({
  [LOADTODO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  }),
  [ADDTODO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  }),
  [DELETETODO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  }),
  [MODIFYTODO_SUCCESS]: (state,action) => ({
    todos: [
      // ...action.payload
    ]
  }),
  [COMPLETETOTO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  }),
  [UNCOMPLETETOTO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  }),
  [CLEARCOMPLETETODO_SUCCESS]: (state,action) => ({
    todos: [
      ...action.payload
    ]
  })
},initialState)