import React from 'react';

import { Typography } from '@material-ui/core';
import { Control } from 'react-hook-form';
import { BioData, TaskOne } from './steps';

interface Props {
  step: number;
  control: Control;
}

function StepperContent({ step, control }: Props): JSX.Element {
  if (step === 0) {
    return <BioData control={control} />;
  }

  if (step === 1) {
    return <TaskOne />;
  }

  if (step === 2) {
    return <TaskOne />;
  }

  return <Typography variant="subtitle2">Unknown stepper</Typography>;
}

export default StepperContent;
