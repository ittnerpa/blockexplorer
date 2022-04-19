import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BlockProvider from './store/BlockContext';
import Routing from './Routing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BlockProvider>
          <Routing />
        </BlockProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
