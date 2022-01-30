import "./ProductsSection.scss";
import ProductCard from "../ProductCard/ProductCard";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { connect } from "react-redux";
import currentItemsReducer from "../../redux/reducers/currentItems";
import { useEffect, useState } from "react";

type Props = {
  items: Array<Object>;
  currentItems: any;
  brands: Array<Object>;
  sortedItems: Array<Object>;
};

const ProductsSection: React.FC<Props> = ({
  items,
  currentItems,
  brands,
  sortedItems,
}) => {
  const [itemsState, setItemsState] = useState();

  useEffect(() => {
    if (brands?.length !== 0) {
      let temp: any = brands;
      setItemsState(temp);
    } else {
      let temp: any = items;
      setItemsState(temp);
    }
  }, [brands, items]);

  return (
    <div className="main-section">
      <h4 className="section-title">Products</h4>
      <div className="item-types">
        <button className="item-types__mug">mug</button>
        <button className="item-types__shirt">shirt</button>
      </div>
      <div className="products-section">
        {currentItems
          ? currentItems.map((el: any, index: number) => (
              <ProductCard
                key={el.added}
                name={el.name}
                price={el.price}
                index={index}
              />
            ))
          : null}
      </div>
      <div className="pagination-container">
        <PaginatedItems itemsPerPage={16} items={itemsState} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.itemsReducer.items,
    currentItems: state.currentItemsReducer.currentItems,
    brands: state.brandsReducer.brands,
    sortedItems: state.itemsReducer.sortedItems,
  };
};

export default connect(mapStateToProps)(ProductsSection);
