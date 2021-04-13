import { createSlice } from '@reduxjs/toolkit';

import { ProcessingStatus } from '../../../enums';
import { Survey } from '../../../interfaces';
import { requestSurvey } from './actions';

interface SurveyState {
  surveyState: ProcessingStatus;
  surveys: Survey;
}

interface SurveySlice {
  survey: SurveyState;
}

const initialState: SurveyState = {
  surveyState: ProcessingStatus.IDLE,
  surveys: {} as Survey,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    clearSurveyData: (state): void => {
      state.surveys = {} as Survey;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestSurvey.pending, (state) => {
      state.surveyState = ProcessingStatus.PENDING;
    });

    builder.addCase(requestSurvey.fulfilled, (state, { payload }) => {
      state.surveys = payload;
      state.surveyState = ProcessingStatus.SUCCEEDED;
    });

    builder.addCase(requestSurvey.rejected, (state) => {
      state.surveyState = ProcessingStatus.FAILED;
    });
  },
});

export const surveyReducer = surveySlice.reducer;

export const selectSurveyState = (state: SurveySlice): ProcessingStatus =>
  state.survey?.surveyState;

export const selectSurveys = (state: SurveySlice): Survey =>
  state.survey?.surveys;
