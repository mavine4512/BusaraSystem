import React from 'react';
import { Control } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { FormGenderField, FormTextField } from '../../forms';

interface Props {
  control: Control;
}
export function BioData({ control }: Props): JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <FormTextField
          id="survey-fullNames"
          name="full_name"
          label="Full Names"
          type="text"
          control={control}
          placeholder="Full Names"
        />

        <FormTextField
          id="survey-phoneNumber"
          name="phone_number"
          label="Phone Number"
          type="text"
          control={control}
          placeholder="Phone Number"
        />
      </Grid>
      <Grid item xs={6}>
        <FormGenderField id="survey-gender" name="gender" control={control} />
      </Grid>
    </Grid>
  );
}
