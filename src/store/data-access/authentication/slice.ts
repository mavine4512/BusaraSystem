import { createSlice } from '@reduxjs/toolkit';

import { currentUser, loginRequest } from './actions';
import { ProcessingStatus } from '../../../enums';
import { User } from '../../../interfaces';

interface AuthenticationState {
  loginState: ProcessingStatus;
  accountState: ProcessingStatus;
  user: User;
}

interface AuthenticationSlice {
  authentication: AuthenticationState;
}

const initialState: AuthenticationState = {
  loginState: ProcessingStatus.IDLE,
  accountState: ProcessingStatus.IDLE,
  user: {} as User,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    clearUserData: (state): void => {
      state.loginState = ProcessingStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.loginState = ProcessingStatus.PENDING;
    });

    builder.addCase(loginRequest.fulfilled, (state) => {
      state.loginState = ProcessingStatus.SUCCEEDED;
    });

    builder.addCase(loginRequest.rejected, (state) => {
      state.loginState = ProcessingStatus.FAILED;
    });

    builder.addCase(currentUser.pending, (state) => {
      state.accountState = ProcessingStatus.PENDING;
    });

    builder.addCase(currentUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.accountState = ProcessingStatus.SUCCEEDED;
    });

    builder.addCase(currentUser.rejected, (state) => {
      state.accountState = ProcessingStatus.FAILED;
    });
  },
});

export const authenticationReducer = authenticationSlice.reducer;

export const selectLoginState = (
  state: AuthenticationSlice
): ProcessingStatus => state.authentication?.loginState;

export const selectAccountState = (
  state: AuthenticationSlice
): ProcessingStatus => state.authentication?.accountState;

export const selectUser = (state: AuthenticationSlice): User =>
  state.authentication?.user;
