import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {store} from "./store.tsx";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history'
import CustomRouter from "./Router.tsx";

export const history = createBrowserHistory()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CustomRouter history={history}>
      <App />
    </CustomRouter>
  </Provider>
);

