import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signOutApi } from '../shared/loginApi';

export const login = createAsyncThunk('user/login', async ({ username, password }) => {
  console.log(username)
  const response = await loginApi(username, password);
  return response;
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  const response = await signOutApi();
  return response;
});
