import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICommentText {
  value: string
}

const initialState: ICommentText = {
  value: 'Привет, Skillbox!',
}

export const commentSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { updateText } = commentSlice.actions

export default commentSlice.reducer
