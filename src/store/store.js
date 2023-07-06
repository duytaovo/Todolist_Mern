import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from '../app.slice'
import loginReducer from './slices/login/loginSlice'
import registerReducer from './slices/register/registerSlice'
import manageTaskReducer from './slices/task'

const rootReducer = {
  app: appReducer,
  login: loginReducer,
  register: registerReducer,
  task: manageTaskReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
