import { ThemeProvider } from "@mui/material";
import { EvosomeKinotekaTheme } from "./themes";
import { RouterProvider } from "react-router";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={EvosomeKinotekaTheme}>
          <RouterProvider router={Router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
