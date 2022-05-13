import { createSlice } from '@reduxjs/toolkit'
import { login, signOut } from './userService';

const initialState = {
  user: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [signOut.pending]: (state) => { 
      state.loading = true;
      state.error = false;
    },
    [signOut.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
      state.user = null;
    },
    [signOut.rejected]: (state)=> {
      state.loading = false;
      state.error = true;
    },
  },
});


export default userSlice.reducer