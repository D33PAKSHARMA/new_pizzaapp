import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import Navigation from "./Components/Navigation";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/getpizza" exact element={<ProductsPage />} />
            <Route path="/getpizza/:_id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
