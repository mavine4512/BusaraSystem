import React from 'react';
import { Control } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { FormSelectField, FormTextField } from '../../forms';
import { Question } from '../../../interfaces';
import { findReplace } from '../../../utils';

interface Props {
  control: Control;
  questions: Question[];
}

export function BioData({ control, questions }: Props): JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {questions &&
          questions
            .filter((question) => question.column_match !== 'gender')
            .map((question) => (
              <FormTextField
                key={question.id}
                id={`bioData-${question.id}`}
                name={question.column_match}
                label={findReplace(question.column_match)}
                type="text"
                control={control}
                placeholder={findReplace(question.column_match)}
              />
            ))}
      </Grid>
      <Grid item xs={6} component="span">
        {questions &&
          questions
            .filter((question) => question.column_match === 'gender')
            .map((question) => (
              <FormSelectField
                key={question.id}
                id={`bioData-${question.id}`}
                name={question.column_match}
                label={findReplace(question.column_match)}
                control={control}
                options={question.q_options ?? []}
              />
            ))}
      </Grid>
    </Grid>
  );
}
