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
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";

type Props = {
  loading: any;
};

const App: React.FC<Props> = ({ loading }) => {
  useEffect(() => {
    dispatch(actionTypes.ITEMS_REQUEST, null);
    dispatch(actionTypes.COMPANIES_REQUEST, null);
  }, []);

  return (
    <div>
      <LoadingOverlay active={loading} spinner text="Loading...">
        <Header />
        <div className="main">
          <div className="left-sidebar">
            <div className="basketBox-phone">
              <BasketBox />
            </div>

            <Sorting />
            <Brands />
            {/* <Tags /> */}
          </div>
          <main className="">
            <ProductsSection />
          </main>
          <div className="basketBox-tab">
            <BasketBox />
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.loadingReducer.loading,
  };
};

export default connect(mapStateToProps)(App);
