import { useContext, useEffect, useState } from "react";
import FeatureProduct from "../components/FeatureProduct";
import Navbar from "../components/Navbar";
import "./Products.css";
import ShopingContext from "../context/shopingContext";

function Products() {
  const { state } = useContext(ShopingContext);
  const [sortedArr, setSortedArr] = useState(state.data);
  const [value, setValue] = useState("");
  const allCompanys = [
    ...new Set(state.data.map((item) => item.fields.company)),
  ];

  const [highestPrice] = state.data
    .map((item) => item.fields.price)
    .sort((a, b) => b - a);
  console.log(highestPrice);

  useEffect(() => {
    searchSort();
  }, [value]);

  function searchSort() {
    setSortedArr(
      state.data.filter((item) => item.fields.name.startsWith(value))
    );
  }

  function sortByCompany(e) {
    if (e.target.textContent === "All") {
      setSortedArr(state.data);
      return;
    }
    const filteredArr = state.data.filter(
      (item) => item.fields.company === e.target.textContent
    );
    setSortedArr(filteredArr);
  }

  function renderArr(arr) {
    return arr.map((item) => <FeatureProduct product={item} key={item.id} />);
  }

  return (
    <>
      <Navbar />

      <section className="container product-container">
        <aside className="filter-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={value}
            onChange={(e) => {
              setValue((value) => (value = e.target.value));
            }}
          />
          <div className="catagory">
            <p className="sub-heading">Company</p>
            <ul>
              <li onClick={sortByCompany}>All</li>
              {allCompanys.map((company) => {
                return <li onClick={sortByCompany}>{company}</li>;
              })}
            </ul>
          </div>
          <p className="sub-heading">Price</p>
          <input type="range" />
        </aside>
        <article className="product-div">
          {sortedArr.length <= 0 && <h1>Product Not Found</h1>}
          {renderArr(sortedArr)}
        </article>
      </section>
    </>
  );
}

export default Products;
