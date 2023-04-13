import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App/App";
import './index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#6d8afd',
    },
    secondary: {
      main: '#6d8afd',
    },
  },
});



root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
