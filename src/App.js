import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopingContext from "./context/shopingContext";
import { useReducer } from "react";
import { initialState, reducer } from "./context/shopingReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopingContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ShopingContext.Provider>
  );
}

export default App;
