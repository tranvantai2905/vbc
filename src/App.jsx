import { BrowserRouter } from "react-router-dom";
import RouterList from "./router";
import { Provider } from "react-redux";
import store from "./state";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </Provider>
  );
}
