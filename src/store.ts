import { configureStore } from '@reduxjs/toolkit'
import commentFormReducer from './shared/CommentFormContainer/commentSlice'
import tokenReducer from './tokenSlice'

export const store = configureStore({
  reducer: {
    commentForm: commentFormReducer,
    token: tokenReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
