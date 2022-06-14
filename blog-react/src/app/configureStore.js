//Importy
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import logedReducer from '../features/loged/logedSlice'
import counterReducer from '../features/counter/counterSlice'
import { combineReducers } from '@reduxjs/toolkit'

//Nastavení perzistivity
const rootPersistConfig = {
  key: 'root',
  storage: storage,  
}

const authPersistConfig = {
  key: 'loged',
  storage: storage,  
}

const counterPersistConfig = {
  key: 'counter',
  storage: storage,  
}

//Reducer
const rootReducer = combineReducers({
  loged: logedReducer(authPersistConfig, logedReducer),
  counter: counterReducer(counterPersistConfig, counterReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
 
//Rexport
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}