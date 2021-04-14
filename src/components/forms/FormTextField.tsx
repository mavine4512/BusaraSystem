import React from 'react';
import {
  FormControl,
  FormLabel,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Control, Controller } from 'react-hook-form';
import { primaryFonts } from '../../constants/theme';

const useStyles = makeStyles(() => ({
  textField: {
    marginTop: 20,
    marginBottom: 10,
  },
  textFieldFont: {
    fontSize: 13,
    textTransform: 'capitalize',
  },
  labelText: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: primaryFonts.rubik,
    marginTop: 10,
  },
}));

interface Props {
  id: string;
  name: string;
  label?: string;
  type: 'text' | 'password' | 'email';
  control: Control;
  placeholder: string;
}

export function FormTextField(props: Props): JSX.Element {
  const { placeholder, id, label, control, name: fieldName, type } = props;
  const { textField, textFieldFont, labelText } = useStyles();

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
        render={({ name, onBlur, value, onChange }): JSX.Element => (
          <TextField
            placeholder={placeholder}
            id={id}
            name={name}
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            size="small"
            autoComplete="off"
            InputProps={{
              classes: {
                input: textFieldFont,
              },
            }}
            className={textField}
            variant="outlined"
          />
        )}
      />
    </FormControl>
  );
}
