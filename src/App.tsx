import React from "react";
import "./App.scss";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar">
          <Sorting />
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default App;
