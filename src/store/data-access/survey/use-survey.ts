import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ProcessingStatus } from '../../../enums';
import { Answers, Survey } from '../../../interfaces';
import { selectSurveys, selectSurveyState } from './slice';
import { requestSurvey, submitQuestions } from './actions';

interface UseSurvey {
  surveys: Survey;
  surveyState: ProcessingStatus;

  surveyRequest: () => void;
  submitSurvey: (data: Answers[]) => void;
}

export function useSurvey(): UseSurvey {
  const dispatch = useDispatch();

  const surveyState = useSelector(selectSurveyState);
  const surveys = useSelector(selectSurveys);

  const surveyRequest = useCallback(() => dispatch(requestSurvey()), [
    dispatch,
  ]);

  const submitSurvey = useCallback(
    (data: Answers[]) => dispatch(submitQuestions(data)),
    [dispatch]
  );

  return {
    surveys,
    surveyState,
    submitSurvey,
    surveyRequest,
  };
}
