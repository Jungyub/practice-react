import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import GlobalStyle from "./styles/GlobalStyle";
import rootReducer from "./modules";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
