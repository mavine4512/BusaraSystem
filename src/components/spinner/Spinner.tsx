import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const height = 100;

function Spinner(): JSX.Element {
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      style={{ height: `${height}vh`, backgroundColor: 'white' }}
    >
      <Grid item>
        <CircularProgress size={80} />
      </Grid>
    </Grid>
  );
}

export default Spinner;
