import React from 'react';
import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import { Control, Controller } from 'react-hook-form';

interface Props {
  id: string;
  name: string;
  control: Control;
}

export function FormCheckField(props: Props): JSX.Element {
  const { id, control, name: fieldName } = props;

  return (
    <FormControl fullWidth>
      <Controller
        name={fieldName}
        control={control}
        render={({ name, onChange, value }): JSX.Element => (
          <FormControlLabel
            value={value}
            control={
              <Checkbox
                id={id}
                checked={!!value}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
                name={name}
              />
            }
            label={name}
          />
        )}
      />
    </FormControl>
  );
}
