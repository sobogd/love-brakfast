import React from "react";
import { Provider } from "react-redux";
import Page from "./components/Page";
import store from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Page />
            </I18nextProvider>
        </Provider>
    </BrowserRouter>

)
