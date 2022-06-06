import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICommentText {
  value: string,
  error: string,
  isTouched: boolean
}

const initialState: ICommentText = {
  value: 'Привет, Skillbox!',
  error: '',
  isTouched: false
}

export const commentSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setIsTouched: (state, action: PayloadAction<boolean>) => {
      state.isTouched = action.payload
    },
    updateError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { updateText, updateError, setIsTouched } = commentSlice.actions

export default commentSlice.reducer
