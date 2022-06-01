import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUserData } from '../hooks/useUserData'

export const meRequestAsync = createAsyncThunk(
  'me/meFetchData',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` }
      })

      const userData: IUserData = {
        name: response.data.name,
        iconImg: response.data.icon_img
      }
  
      return userData
    } catch (err) {
      return rejectWithValue(String(err))
    }
  }
)

export interface IMe {
  data: IUserData
  error: string,
  loading: boolean
}

const initialState: IMe = {
  data: {},
  error: '',
  loading: false
}

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(meRequestAsync.pending, (state) => {
        state.loading = true,
        state.error = ''
      })
      .addCase(meRequestAsync.fulfilled, (state, action) => {
        state.data.name = action.payload.name
        state.data.iconImg = action.payload.iconImg
        state.loading = false
      })
      .addCase(meRequestAsync.rejected, (state, action) => {
        state.loading = false
        if (typeof action.payload === 'string') {
          state.error = action.payload
        }
      })
  }
})

export const {} = meSlice.actions

export default meSlice.reducer
