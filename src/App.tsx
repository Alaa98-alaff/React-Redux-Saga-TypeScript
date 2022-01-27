import React from "react";
import "./App.scss";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";
import Tags from "./components/Tags/Tags";
import ProductsSection from "./components/ProductsSection/ProductsSection";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar">
          <Sorting />
          <Brands />
          <Tags />
        </div>
        <main className="">
          <ProductsSection />
        </main>
      </div>
    </div>
  );
};

export default App;
