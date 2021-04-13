import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './data-access/authentication';
import { surveyReducer } from './data-access/survey';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    survey: surveyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
