import { useContext, useEffect, useState } from "react";
import FeatureProduct from "../components/FeatureProduct";
import Navbar from "../components/Navbar";
import "./Products.css";
import ShopingContext from "../context/shopingContext";

function Products() {
  const { state } = useContext(ShopingContext);
  const [sortedArr, setSortedArr] = useState(state.data);
  const [value, setValue] = useState("");

  const price = state.data
    .map((item) => item.fields.price)
    .sort((a, b) => b - a);

  const [rangeVlaue, setRangeValue] = useState(price[0]);

  const allCompanys = [
    ...new Set(state.data.map((item) => item.fields.company)),
  ];

  useEffect(() => {
    searchSort();
  }, [value]);

  useEffect(() => {
    sortByRange(rangeVlaue);
  }, [rangeVlaue]);

  // Sort By Search
  function searchSort() {
    setSortedArr(
      state.data.filter((item) => item.fields.name.startsWith(value))
    );
  }

  // Sort By Company
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

  // Sort By Range
  function sortByRange(range) {
    const sortedRange = state.data.filter(
      (item) => item.fields.price <= rangeVlaue
    );
    setSortedArr(sortedRange);
  }

  // Rander Arr

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
          <input
            type="range"
            className="range-input"
            min={price[price.length - 1]}
            max={price[0]}
            value={rangeVlaue}
            onChange={(e) => {
              setRangeValue(e.target.value);
            }}
          />
          <p className="price">${rangeVlaue}</p>
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
