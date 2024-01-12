import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopingContext from "./context/shopingContext";
import { useReducer } from "react";
import { initialState, reducer } from "./context/shopingReducer";
import Products from "./pages/Products";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopingContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ShopingContext.Provider>
  );
}

export default App;
