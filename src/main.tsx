import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {store} from "./store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
