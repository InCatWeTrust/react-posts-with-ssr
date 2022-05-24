import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IToken {
  value: string
}

const initialState: IToken = {
  value: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { updateToken } = tokenSlice.actions

export default tokenSlice.reducer
