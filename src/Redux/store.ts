import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterReducer'


export const store = configureStore({
    reducer: { 
      lettersNameState: filterReducer
       }
  })

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']