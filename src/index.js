import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
