import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Router from "./router/router";
import './App.css'
import { store } from "./redux/store";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
    <Provider store={store}><QueryClientProvider client={queryClient}><Router /></QueryClientProvider></Provider>
    </>
  )
}

export default App
