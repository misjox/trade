import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import Reserve from "./pages/reserve";
import FaqPage from "./pages/faq";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Verify from "./pages/verify";
import Warning from "./pages/warning";
import Rules from "./pages/rules";
import Trade from "./pages/trade";

function App() {
  document.title = "Crypto-Dom";
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/warning" element={<Warning />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/trade/:id" element={<Trade />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
