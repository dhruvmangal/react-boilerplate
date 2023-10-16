import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Loader } from './context/loader/Loader';
import { SnakeBarProvider } from './context/SnakeBar/SnakeBar';

function App() {
  const [reactQueryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            staleTime: 30000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={reactQueryClient}>
      <SnakeBarProvider>
        <Loader>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Loader>
      </SnakeBarProvider>
    </QueryClientProvider>
  );
}

export default App;
