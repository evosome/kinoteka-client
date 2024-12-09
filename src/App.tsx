import { ThemeProvider } from "@mui/material";
import { EvosomeKinotekaTheme } from "./themes";
import { RouterProvider } from "react-router";
import { Router } from "./router";

function App() {
  return (
    <>
        <ThemeProvider theme={EvosomeKinotekaTheme}>
            <RouterProvider router={Router}/>
        </ThemeProvider>
    </>
  );
}

export default App;
