import { useContext } from "react";
import Button from "../components/Button";
import FeatureProduct from "../components/FeatureProduct";
import Header from "../components/Header";
import ShopingContext from "../context/shopingContext";
import "./Home.css";

function Home() {
  const { state } = useContext(ShopingContext);

  return (
    <>
      <Header />

      <section className="container home-section">
        <h2>Featured</h2>

        <div className="product-div">
          <FeatureProduct product={state.data[0]} />
          <FeatureProduct product={state.data[1]} />
          <FeatureProduct product={state.data[2]} />
        </div>
        <Button>All product</Button>
      </section>
    </>
  );
}

export default Home;
