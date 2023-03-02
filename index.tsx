import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utility/theme';
import './css/index.scss';

ReactDOM.createRoot(document.querySelector('#app--pricing-admissions')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
