import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FullPage from '../../components/full-page/FullPage';
import useStyles from './styles';
import { useSurvey } from '../../store/data-access/survey';
import { ProcessingStatus } from '../../enums';
import SurveySteppers from '../../components/survey-stepper/SurveyStepper';
import { SurveyForm } from '../../interfaces';

function Dashboard(): JSX.Element {
  const { root } = useStyles();
  const { surveys, surveyRequest, surveyState } = useSurvey();
  const methods = useForm<SurveyForm>({
    mode: 'onChange',
    defaultValues: {
      full_name: '',
      phone_number: '',
    },
  });

  const isSurvey = surveyState === ProcessingStatus.PENDING;
  const { handleSubmit, control } = methods;

  useEffect(() => {
    surveyRequest();
  }, [surveyRequest]);

  const onSubmit = (data: SurveyForm) => {
    console.log(data);
  };

  console.log(surveys);

  return (
    <FullPage title="Survey">
      <div className={root}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSurvey ? (
              <span>Loading ...</span>
            ) : (
              <SurveySteppers control={control} />
            )}
          </form>
        </FormProvider>
      </div>
    </FullPage>
  );
}

export default Dashboard;
