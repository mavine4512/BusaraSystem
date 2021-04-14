import React, { useMemo } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Severity } from '../../enums';

interface Props {
  severity: Severity;
  message: string;
}

function CustomAlert({ severity, message }: Props): JSX.Element {
  const isSuccess = useMemo<boolean>(() => severity === Severity.SUCCESS, [
    severity,
  ]);

  return (
    <div>
      <Alert severity={severity}>
        <AlertTitle>{isSuccess ? 'Success' : 'Error'}</AlertTitle>
        {message} — <strong> {isSuccess ? 'Hurray!' : 'check it out!'}</strong>
      </Alert>
    </div>
  );
}

export default CustomAlert;
