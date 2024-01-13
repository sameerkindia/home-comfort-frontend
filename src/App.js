import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopingContext from "./context/shopingContext";
import { useReducer } from "react";
import { initialState, reducer } from "./context/shopingReducer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopingContext.Provider value={{ state, dispatch }}>
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
