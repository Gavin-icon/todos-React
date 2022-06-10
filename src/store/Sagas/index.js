import {all} from 'redux-saga/effects'
import MainSagaMiddleware from './Main.saga'
export default function* sagaMiddleware() {
  yield all([
    MainSagaMiddleware()
  ])
}