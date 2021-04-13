import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ProcessingStatus } from '../../../enums';
import { Survey } from '../../../interfaces';
import { selectSurveys, selectSurveyState } from './slice';
import { requestSurvey } from './actions';

interface UseSurvey {
  surveys: Survey;
  surveyState: ProcessingStatus;

  surveyRequest: () => void;
}

export function useSurvey(): UseSurvey {
  const dispatch = useDispatch();

  const surveyState = useSelector(selectSurveyState);
  const surveys = useSelector(selectSurveys);

  const surveyRequest = useCallback(() => dispatch(requestSurvey()), [
    dispatch,
  ]);

  return {
    surveys,
    surveyState,
    surveyRequest,
  };
}
