import {combineReducers} from 'redux'
import AppReducer from './App.reducer'
import MainReducer from './Main.reducer'
export default combineReducers({
  AppData: AppReducer,
  MainData: MainReducer
})