import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGet } from '../../../utils';
import { Survey } from '../../../interfaces';

// TODO: Submit questions @naaman
// export const submitQuestions = createAsyncThunk(
//   'authentication/questions',
//   async (params: any, thunkAPI) => {
//     try {
//       const { data } = await callPost<{}, {}>('oauth/token/', params);
//
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.response?.data);
//     }
//   }
// );

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
