import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGet, callPost } from '../../../utils';
import { Answers, Survey } from '../../../interfaces';

export const submitQuestions = createAsyncThunk(
  'authentication/questions',
  async (params: Answers[], thunkAPI) => {
    try {
      const { data } = await callPost<Answers, any>(
        'recruitment/answers/submit/',
        params
      );

      console.log('resp: ', data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);

export const requestSurvey = createAsyncThunk(
  'authentication/requestQuestions',
  async (_, thunkAPI) => {
    try {
      const { data } = await callGet<Survey>(
        'recruitment/forms/?node_type=Both'
      );

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
