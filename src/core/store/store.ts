import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

// Tipos para usar com useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
