import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { logger } from './middleware/logger'
import commentFormReducer from './reducers/commentSlice'
import tokenReducer from './reducers/tokenSlice'
import meReducer from './reducers/meSlice'

export const store = configureStore({
  reducer: {
    commentForm: commentFormReducer,
    token: tokenReducer,
    me: meReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
