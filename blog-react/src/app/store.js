//Importy
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

//JednoduchĂ˝ reducer
const rootReducer =  combineReducers({
  loged: authReducer
})

//Export
export const store = configureStore({ reducer: rootReducer })