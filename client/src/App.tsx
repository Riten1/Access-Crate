import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "react-hot-toast";

import { store } from "./redux/store";
import Router from "./router/router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const LenisScrollLayout = ({ children }: { children: React.ReactNode }) => {
    return <ReactLenis root>{children}</ReactLenis>;
  };

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <LenisScrollLayout>
            <Router />
          </LenisScrollLayout>
        </QueryClientProvider>
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
