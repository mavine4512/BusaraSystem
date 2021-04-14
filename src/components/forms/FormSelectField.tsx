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
import { Options } from '../../interfaces';

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 14,
    fontFamily: primaryFonts.rubik,
    marginTop: 10,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
}));

interface Props {
  id: string;
  name: string;
  label?: string;
  control: Control;
  options: Options[];
}

export function FormSelectField(props: Props): JSX.Element {
  const { id, label, control, options, name: fieldName } = props;
  const { labelText } = useStyles();

  return (
    <FormControl fullWidth>
      {label && (
        <FormLabel className={labelText} component="span">
          {label}
        </FormLabel>
      )}
      <Controller
        name={fieldName}
        control={control}
        render={({ name, onChange, value }): JSX.Element => (
          <RadioGroup
            id={id}
            aria-label={label}
            onChange={onChange}
            name={name}
            value={value}
          >
            {options &&
              options.map((option) => (
                <FormControlLabel
                  key={`${option.id}-${option.name}`}
                  value={`${option.id}`}
                  label={option.name}
                  control={<Radio />}
                />
              ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
