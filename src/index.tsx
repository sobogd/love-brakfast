import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Page from "./components/Page";
import store from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Page />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
