import "./ProductsSection.scss";
import ProductCard from "../ProductCard/ProductCard";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { connect } from "react-redux";
import currentItemsReducer from "../../redux/reducers/currentItems";
import { useEffect } from "react";

type Props = {
  items: Array<Object>;
  currentItems: any;
  brands: Array<Object>;
};

const ProductsSection: React.FC<Props> = ({ items, currentItems, brands }) => {
  return (
    <div className="main-section">
      <h4 className="section-title">Products</h4>
      <div className="item-types">
        <button className="item-types__mug">mug</button>
        <button className="item-types__shirt">shirt</button>
      </div>
      <div className="products-section">
        {currentItems
          ? currentItems.map((el: any) => (
              <ProductCard key={el.added} name={el.name} price={el.price} />
            ))
          : "test"}
      </div>
      <div className="pagination-container">
        <PaginatedItems
          itemsPerPage={16}
          items={brands?.length !== 0 ? brands : items}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.itemsReducer.items,
    currentItems: state.currentItemsReducer.currentItems,
    brands: state.brandsReducer.brands,
  };
};

export default connect(mapStateToProps)(ProductsSection);
