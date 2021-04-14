import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { Button } from '@material-ui/core';
import FullPage from '../../components/full-page/FullPage';
import useStyles from './styles';
import { useSurvey } from '../../store/data-access/survey';
import { ProcessingStatus, Severity } from '../../enums';
import SurveySteppers from '../../components/survey-stepper/SurveyStepper';
import { SurveyForm } from '../../interfaces';
import { FormDefaults } from '../../constants';
import { preparedHttpData } from '../../utils';
import CustomAlert from '../../components/alert/Alert';

function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { surveys, surveyRequest, surveyState, submitSurvey } = useSurvey();
  const methods = useForm<SurveyForm>({
    mode: 'onChange',
    defaultValues: FormDefaults,
  });

  const isSurvey = surveyState === ProcessingStatus.PENDING;
  const isSurveyFail = surveyState === ProcessingStatus.FAILED;
  const { handleSubmit, control } = methods;

  const fullName = useWatch({
    control,
    name: 'full_name',
    defaultValue: '',
  });

  const phoneNumber = useWatch({
    control,
    name: 'phone_number',
    defaultValue: '',
  });

  const isFormValid = useMemo<boolean>(() => !!fullName && !!phoneNumber, [
    fullName,
    phoneNumber,
  ]);

  useEffect(() => {
    surveyRequest();
  }, [surveyRequest]);

  const onSubmit = (data: SurveyForm) => {
    const preparedData = preparedHttpData(data, surveys);
    console.log('preparedData: ', preparedData);
    submitSurvey(preparedData);
  };

  return (
    <FullPage title="Survey">
      <div className={classes.root}>
        {isSurveyFail && (
          <CustomAlert
            severity={isSurveyFail ? Severity.ERROR : Severity.SUCCESS}
            message={
              isSurveyFail
                ? 'Issue with the submission of your survey'
                : 'Survey submitted successfully'
            }
          />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSurvey ? (
              <span>Loading ...</span>
            ) : (
              <SurveySteppers control={control} survey={surveys} />
            )}
            {!isSurvey && (
              <Button
                disabled={isSurvey || !isFormValid}
                className={classes.submitBtn}
                variant="outlined"
                type="submit"
              >
                Submit
              </Button>
            )}
          </form>
        </FormProvider>
      </div>
    </FullPage>
  );
}

export default Dashboard;
