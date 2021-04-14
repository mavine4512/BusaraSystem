import React from 'react';
import { Control } from 'react-hook-form';

import { Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Survey } from '../../interfaces';
import { BioData, Other } from './steps';

interface Props {
  control: Control;
  survey: Survey;
}

function SurveySteppers({ control, survey }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="subtitle2">
        Bio Data
      </Typography>
      <Divider className={classes.divider} />

      <BioData
        questions={
          'forms' in survey
            ? survey.forms[0].pages[0].sections[0].questions
            : []
        }
        control={control}
      />

      <Typography className={classes.subSectionTitle} variant="subtitle2">
        Others
      </Typography>
      <Divider className={classes.divider} />
      <Other
        questions={
          'forms' in survey
            ? survey.forms[0].pages[1].sections[0].questions
            : []
        }
        control={control}
      />
    </div>
  );
}

export default SurveySteppers;
