import { createAction } from 'redux-actions'
import {INCREMENT, DECREMENT} from '../ActionTypes/App.action.type'
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
