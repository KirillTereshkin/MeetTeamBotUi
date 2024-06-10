import { useEffect } from "react";
import { TG, router } from "./services/constants";
import { RouterProvider } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import "./App.module.scss";

const App = () => {
  useEffect(() => {
    TG.ready();
  }, []);

  console.log("with router");

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
};

export default App;
