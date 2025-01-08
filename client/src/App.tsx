import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { MantineProvider } from "@mantine/core";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "react-hot-toast";

import { store } from "./redux/store";
import Router from "./router/router";

import "@mantine/core/styles.css";

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
          <MantineProvider withGlobalClasses={false}>
            <LenisScrollLayout>
              <Router />
            </LenisScrollLayout>
          </MantineProvider>
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
