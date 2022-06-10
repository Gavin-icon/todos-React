import { configureStore } from '@reduxjs/toolkit'
import TotalReducer from './Reducers'
import createSagaMiddleware from 'redux-saga'
import TotalSaga from './Sagas'
const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
  reducer: TotalReducer,
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(TotalSaga)

export default Store
