import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const saveToken = createAsyncThunk(
  'token/tokenFetchData',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token') || window.__token__

      if (!token || token === 'undefined') {
        throw new Error('Undefined token')
      } else {
        localStorage.setItem('token', token)
      }

      return token
    } catch (err) {
      if (err instanceof Error) {
        localStorage.removeItem('token')
        return rejectWithValue(err.message)
      }
    }
  }
)

export interface IToken {
  value: string,
  error: string
}

const initialState: IToken = {
  value: '',
  error: ''
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    removeToken: (state) => {
      state.value = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveToken.pending, (state) => {
        state.error = ''
      })
      .addCase(saveToken.fulfilled, (state, action) => {
        if (action.payload) {
          state.value = action.payload
        }
      })
      .addCase(saveToken.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload
        }
      })
  }
})

export const { removeToken } = tokenSlice.actions

export default tokenSlice.reducer
