import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import MiddleWare from "./middleware";
import Reducers from "./reducers";
import App from "./components/App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
const store = createStore(Reducers, MiddleWare);
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
