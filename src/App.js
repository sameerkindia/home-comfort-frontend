// import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
