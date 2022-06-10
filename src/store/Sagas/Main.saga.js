import {takeEvery, put} from 'redux-saga/effects'
import {LOADTODO,LOADTODO_SUCCESS,ADDTODO,ADDTODO_SUCCESS, DELETETODO,DELETETODO_SUCCESS, MODIFYTODO, MODIFYTODO_SUCCESS, COMPLETETOTO, UNCOMPLETETOTO, COMPLETETOTO_SUCCESS, UNCOMPLETETOTO_SUCCESS, CLEARCOMPLETETODO, CLEARCOMPLETETODO_SUCCESS} from '../ActionTypes/App.action.type'
import axios from 'axios'
function* getRealData() {
  const data = yield axios.get('http://localhost:3005/mock').then(res=>res.data)
  // console.log(data)
  yield put({ type: LOADTODO_SUCCESS, payload: data })
}
function* addTodoList(action) {
  const newData = yield axios.post('http://localhost:3005/mock',{
    taskName: action.payload,
    isCompleted: false
  }).then(res=>res.data)

  yield put({ type: ADDTODO_SUCCESS, payload: newData })
}
function* deleteTodo(action) {
  const newData = yield axios.delete(`http://localhost:3005/mock/${action.payload}`).then(res=>res.data)
  // console.log(newData)
  yield put({ type: DELETETODO_SUCCESS, payload: newData})
}
function* modifyTodo(action) {
  // patch修改单个，put修改全部
  // const newData = yield axios.patch(`http://localhost:3005/mock/${action.payload.id}`,{
  //   isCompleted: action.payload.isCompleted
  // })
  // yield put({ type: MODIFYTODO_SUCCESS, payload: newData })
  yield axios.patch(`http://localhost:3005/mock/${action.payload.id}`,{
    isCompleted: action.payload.isCompleted
  })
}
function* completeTodo() {
  const data = yield axios.get('http://localhost:3005/mock').then(res=>res.data)
  const newData = data.filter(item=> item.isCompleted)
  yield put({ type: COMPLETETOTO_SUCCESS, payload: newData })
}
function* uncompleteTodo() {
  const data = yield axios.get('http://localhost:3005/mock').then(res=>res.data)
  const newData = data.filter(item=> !item.isCompleted)
  yield put({ type: UNCOMPLETETOTO_SUCCESS, payload: newData })

}
function* clearCompleteTodo(action) {
  for(var i=0;i<action.payload.length;i++) {
    yield axios.delete(`http://localhost:3005/mock/${action.payload[i]}`)
  }
  const newData = axios.get('http://localhost:3005/mock').then(res=>res.data)
  yield put({ type: CLEARCOMPLETETODO_SUCCESS, payload: newData })
}


export default function* MainSagaMiddleware() {
  yield takeEvery(LOADTODO, getRealData)
  yield takeEvery(ADDTODO, addTodoList)
  yield takeEvery(DELETETODO, deleteTodo)
  yield takeEvery(MODIFYTODO, modifyTodo)
  yield takeEvery(COMPLETETOTO, completeTodo)
  yield takeEvery(UNCOMPLETETOTO, uncompleteTodo)
  yield takeEvery(CLEARCOMPLETETODO,clearCompleteTodo)
}