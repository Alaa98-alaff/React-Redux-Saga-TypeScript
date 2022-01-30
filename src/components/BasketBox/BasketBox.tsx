import "./BasketBox.scss";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import dispatch from "../../redux/dispatch";
import * as actionTypes from "../../redux/actionTypes";

type Props = {
  items: Array<Object>;
  currentItems: any;
  brands: Array<Object>;
  sortedItems: Array<Object>;
  addedItems: any;
  currentAdded: any;
};

const BasketBox: React.FC<Props> = ({
  addedItems,
  items,
  currentItems,
  currentAdded,
}) => {
  const [forceRender, setForceRender] = useState(0);
  const [deleteItem, setDeleteItem] = useState(Object as any);

  useEffect(() => {
    handleDeleteItem();
  }, [deleteItem]);

  const handleDeleteItem = () => {
    if (currentAdded[0]) {
      // const uniqueArr: any = new Set(addedItems);

      const itemIndex = addedItems?.findIndex((item: any, index: number) => {
        return item.added === deleteItem.added;
      });

      console.log(itemIndex, "deletet");

      // addedItems[itemIndex].amount = addedItems[itemIndex]?.amount - 1;

      // addedItems = [...uniqueArr];
    }
  };

  const handleBasketItems = () => {
    if (addedItems.length === 0) {
      return (
        <div className="no-items">
          <h2>There is no added items</h2>
          <h3> Add some items to your basket 😀</h3>
        </div>
      );
    }

    const uniqueArr: any = new Set(addedItems);

    return [...uniqueArr]?.map((item: any, index: Number) => {
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
                setDeleteItem(item);
                handleDeleteItem();
              }}
            >
              -
            </span>
            <div className="amout-container">
              <div className="amout-container__amount">{item.amount}</div>
            </div>
            <span className="handle">+</span>
          </div>
          <hr className="line" />
        </div>
      );
    });
  };

  const addSameItem = () => {
    if (currentAdded[0]) {
      const addedTimes = addedItems?.filter((item: any, index: number) => {
        return item.added === currentAdded[0].added;
      });

      const index = addedItems?.findIndex((el: any) => {
        return el.added === currentAdded[0].added;
      });

      addedItems[index].amount = addedTimes?.length;

      setForceRender(forceRender + 1);
    }
  };

  useEffect(() => {
    addSameItem();
  }, [currentAdded]);

  useEffect(() => {
    handleBasketItems();
  }, [forceRender, deleteItem]);

  return (
    <div className="main-basketbox">
      <div className="products">{handleBasketItems()}</div>
      <div className="total-container">
        <div className="total-container__total">$39</div>
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
    addedItems: state.basketItemsReducer.addedItems,
    currentAdded: state.basketItemsReducer.currentAdded,
  };
};

export default connect(mapStateToProps)(BasketBox);
