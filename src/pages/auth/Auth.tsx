import React, { useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';

import useStyles from './styles';
import { FormTextField } from '../../components/forms';
import { LoginForm } from '../../interfaces';
import { useAuth } from '../../store/data-access/authentication';
import { Paths, ProcessingStatus } from '../../enums';
import { switchToPath } from '../../utils/redirect';

function Auth(): JSX.Element {
  const { loginState, loginRequest } = useAuth();
  const { root, btn, errorText } = useStyles();
  const methods = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const isLogin = loginState === ProcessingStatus.PENDING;
  const isLoginSuccess = loginState === ProcessingStatus.SUCCEEDED;
  const isLoginFail = loginState === ProcessingStatus.FAILED;
  const { control, handleSubmit } = methods;

  const onSubmit = (data: LoginForm) => {
    loginRequest(data);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      switchToPath(Paths.DASHBOARD);
    }
  }, [isLoginSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={root}>
          <Typography variant="h5">Sign in</Typography>
          <FormTextField
            control={control}
            id="auth-username"
            name="username"
            placeholder="Your email address"
            type="email"
          />

          <FormTextField
            control={control}
            id="auth-password"
            name="password"
            placeholder="Password"
            type="password"
          />

          {isLoginFail && (
            <Typography className={errorText} variant="subtitle2">
              There is an issue with your login credentials. Try again.
            </Typography>
          )}

          <Button
            type="submit"
            className={btn}
            variant="contained"
            color="primary"
            disabled={isLogin}
          >
            Log in
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default Auth;
