import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import RouteApp from '../route/Route';
import StoreProvider from '../../store';
import { theme } from '../../constants/theme';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteApp />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
