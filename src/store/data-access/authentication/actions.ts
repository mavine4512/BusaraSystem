import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGet, callPost } from '../../../utils';
import { Auth, LoginForm, User } from '../../../interfaces';
import { storeData } from '../../../utils/store-auth-data';
import { auth_token, refresh_token } from '../../../constants';

export const loginRequest = createAsyncThunk(
  'authentication/loginUser',
  async (params: LoginForm, thunkAPI) => {
    try {
      const { data } = await callPost<Auth, LoginForm>('oauth/token/', params);

      storeData(auth_token, data.access_token);
      storeData(refresh_token, data.refresh_token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);

export const currentUser = createAsyncThunk(
  'authentication/currentUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await callGet<User>('users/current-user/');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
