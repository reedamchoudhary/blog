import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Theme";
import { UserAuthContextProvider } from "./context/UserAuthContext";

ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
