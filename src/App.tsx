import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar">
          <Sorting />
        </div>
      </div>
    </div>
  );
};

export default App;
