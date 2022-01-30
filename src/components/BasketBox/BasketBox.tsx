import "./BasketBox.scss";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import dispatch from "../../redux/dispatch";
import * as actionTypes from "../../redux/actionTypes";
import { itemsData } from "../../redux/saga/Api";

type Props = {
  addedItems: any;
  totalPrice: Number;
};

const BasketBox: React.FC<Props> = ({ addedItems, totalPrice }) => {
  const handleBasketItems = () => {
    if (addedItems.length === 0) {
      return (
        <div className="no-items">
          <h2>There is no added items</h2>
          <h3> Add some items to your basket 😀</h3>
        </div>
      );
    }

    return addedItems?.map((item: any, index: Number) => {
      return (
        <div className="product-container" key={item.added}>
          <div className="product-container__details">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
          <div className="product-container__handle">
            <span
              className="handle"
              onClick={() => {
                dispatch(actionTypes.DELETE_ITEMS_BASKET, item);
                dispatch(actionTypes.BASKET_ADD_CLICKED, null);
              }}
            >
              -
            </span>
            <div className="amout-container">
              <div className="amout-container__amount">{item.amount}</div>
            </div>
            <span
              className="handle"
              onClick={() => {
                dispatch(actionTypes.ADD_ITEMS_BASKET, item);
                dispatch(actionTypes.BASKET_ADD_CLICKED, null);
              }}
            >
              +
            </span>
          </div>
          <hr className="line" />
        </div>
      );
    });
  };

  return (
    <div className="main-basketbox">
      <div className="products">{handleBasketItems()}</div>
      <div className="total-container">
        <div className="total-container__total">₺ {totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    addedItems: state.basketItemsReducer.addedItems,
    totalPrice: state.basketItemsReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(BasketBox);
