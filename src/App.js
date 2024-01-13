import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopingContext from "./context/shopingContext";
import { useReducer, useState } from "react";
import { initialState, reducer } from "./context/shopingReducer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(() => state.cartOpen);

  console.log(state.cartOpen);

  return (
    <ShopingContext.Provider value={{ state, dispatch }}>
      {state.cartOpen && <Cart />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </ShopingContext.Provider>
  );
}

export default App;
