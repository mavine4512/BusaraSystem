import React from 'react';
import { Control } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { Question } from '../../../interfaces';
import useStyles from './styles';
import { FormCheckField } from '../../forms';
import { dynamicFindReplace } from '../../../utils';

interface Props {
  control: Control;
  questions: Question[];
}

export function Other({ control, questions }: Props): JSX.Element {
  const { sectionTwo, queryImg } = useStyles();

  return (
    <div className={sectionTwo}>
      {questions &&
        questions
          .filter((query) => query.q_options.length > 0)
          .map((question) => (
            <Grid key={question.id} container spacing={3}>
              <Grid item xs={6}>
                <img
                  className={queryImg}
                  src={question.description}
                  alt={dynamicFindReplace(question.column_match, '_image')}
                />
              </Grid>
              <Grid item xs={6}>
                {question.q_options.map((option) => (
                  <FormCheckField
                    key={option.id}
                    id={`bioData-${option.id}`}
                    name={option.name}
                    control={control}
                  />
                ))}
              </Grid>
            </Grid>
          ))}
    </div>
  );
}
