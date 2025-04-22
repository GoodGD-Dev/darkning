import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
// Importe seus reducers aqui

const rootReducer = combineReducers({
  counter: counterReducer
  // Adicione seus reducers aqui
})

export default rootReducer
