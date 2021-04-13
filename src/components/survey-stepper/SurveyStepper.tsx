import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Control } from 'react-hook-form';
import useStyles from './styles';
import { steps } from '../../constants';
import StepperContent from './StepperContent';

interface Props {
  control: Control;
}

function SurveySteppers({ control }: Props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleActiveStep = () => {
    return steps.map((label, index) => {
      const stepProps: { completed?: boolean } = {};
      const labelProps: { optional?: React.ReactNode } = {};

      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>{label}</StepLabel>
        </Step>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>{handleActiveStep()}</Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              style={{ marginTop: '10%' }}
              className={classes.instructions}
            >
              Survey completed successfully
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              <StepperContent control={control} step={activeStep} />
            </Typography>
            <Grid className={classes.cta} container spacing={1}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}

export default SurveySteppers;
