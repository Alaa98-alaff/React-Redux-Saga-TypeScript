import "./ProductCard.scss";
import { connect, useStore } from "react-redux";
import { useEffect, useState } from "react";
import dispatch from "../../redux/dispatch";
import * as actionTypes from "../../redux/actionTypes";

interface Props {
  name?: string;
  price?: number;
  index?: number | any;

  items: any;
  currentItems: any;
  brands: Array<Object>;
  sortedItems: Array<Object>;
}

const ProductCard: React.FC<Props> = ({
  name,
  price,
  index,
  items,
  currentItems,
}) => {
  const [clicked, isClicked] = useState(true);

  const handleAddItem = () => {
    dispatch(actionTypes.ADD_ITEMS_BASKET, currentItems[index]);
    dispatch(actionTypes.BASKET_ADD_CLICKED, null);
  };

  return (
    <div className="productcard-container">
      <div className="image-container">
        <img className="image-container__image" src="" alt="" />
      </div>
      <div className="product-description">
        <div className="product-description__price">₺ {price}</div>
        <div className="product-description__name">{name}</div>
      </div>
      <button className="addproduct-btn" onClick={handleAddItem}>
        Add
      </button>
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
export default connect(mapStateToProps)(ProductCard);
