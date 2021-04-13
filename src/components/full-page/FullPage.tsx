import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { useAuth } from '../../store/data-access/authentication';
import { Paths, ProcessingStatus } from '../../enums';
import { deleteStoredData } from '../../utils/store-auth-data';
import { auth_token, refresh_token } from '../../constants';
import { switchToPath } from '../../utils/redirect';

interface Props {
  title: string;
  children: React.ReactNode;
}

function FullPage(props: Props): JSX.Element {
  const { title, children } = props;
  const {
    root,
    sideMenu,
    values,
    pageTitle,
    logoutWrapper,
    horizontalLine,
  } = useStyles();

  const { accountState, fetchUser, user } = useAuth();

  const isLoading = accountState === ProcessingStatus.PENDING;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleLogout = () => {
    deleteStoredData(auth_token);
    deleteStoredData(refresh_token);
    switchToPath(Paths.AUTH);
  };

  return (
    <div className={root}>
      <Typography variant="h5" className={pageTitle}>
        {title}
      </Typography>
      <div className={horizontalLine} />
      <Grid container spacing={1}>
        <Grid container item xs={4}>
          {isLoading && <span>Loading data..</span>}
          <ul className={sideMenu}>
            <li>
              <Typography variant="subtitle2">Identification</Typography>
              <Typography className={values} variant="subtitle2">
                {user.id}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2">Name</Typography>
              <Typography className={values} variant="subtitle2">
                {user.name}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2">Email</Typography>
              <Typography className={values} variant="subtitle2">
                {user.email}
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle2">Phone</Typography>
              <Typography className={values} variant="subtitle2">
                {user.phone_number}
              </Typography>
            </li>
          </ul>
          <Button onClick={handleLogout} className={logoutWrapper}>
            Logout
          </Button>
        </Grid>
        <Grid container item xs={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

export default FullPage;
