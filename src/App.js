import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopingContext from "./context/shopingContext";
import { useReducer } from "react";
import { initialState, reducer } from "./context/shopingReducer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopingContext.Provider value={{ state, dispatch }}>
      {state.cartOpen && <Cart />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ShopingContext.Provider>
  );
}

export default App;
