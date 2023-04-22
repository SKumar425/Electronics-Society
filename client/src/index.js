import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ReduxStore from "./store";
import "../src/style/community.css";
import "../src/style/resources.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-cnu4ez5f16lwrkiq.us.auth0.com"
    clientId="NlYCRorgLvKdUOtRUOtMhZRa5GYqV1fJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <Provider store={ReduxStore()}>
    <App />
  </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
