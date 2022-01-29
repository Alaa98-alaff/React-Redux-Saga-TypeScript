import React, { useEffect } from "react";
import "./App.scss";
import dispatch from "./redux/dispatch";
import * as actionTypes from "./redux/actionTypes";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";
import Tags from "./components/Tags/Tags";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import BasketBox from "./components/BasketBox/BasketBox";
import itemsReducer from "./redux/reducers/itemsData";

const App: React.FC = () => {
  useEffect(() => {
    dispatch(actionTypes.ITEMS_REQUEST, null);
    dispatch(actionTypes.COMPANIES_REQUEST, null);
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar">
          <Sorting />
          <Brands />
          {/* <Tags /> */}
        </div>
        <main className="">
          <ProductsSection />
        </main>
        <div className="right-side">
          <BasketBox />
        </div>
      </div>
    </div>
  );
};

export default App;
