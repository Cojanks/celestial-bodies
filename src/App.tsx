import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './views/Home';
import { GlobalStyles } from './styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Home />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
