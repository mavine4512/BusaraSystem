import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Control, Controller } from 'react-hook-form';
import { primaryFonts } from '../../constants/theme';

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 14,
    fontFamily: primaryFonts.rubik,
    marginTop: 10,
  },
}));

interface Props {
  id: string;
  name: string;
  label?: string;
  control: Control;
}

export function FormGenderField(props: Props): JSX.Element {
  const { id, label, control, name: fieldName } = props;
  const { labelText } = useStyles();

  return (
    <FormControl fullWidth>
      {label && (
        <FormLabel className={labelText} component="legend">
          Gender
        </FormLabel>
      )}
      <Controller
        name={fieldName}
        control={control}
        render={({ name, value, onChange }): JSX.Element => (
          <RadioGroup
            id={id}
            aria-label="gender"
            name={name}
            value={value}
            onChange={onChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
