import { Provider } from "react-redux";
import Body from "./Component/Body";
import Head from "./Component/Head";
import store from "./Utils/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import Watchpage from "./Component/Watchpage";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<Watchpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
