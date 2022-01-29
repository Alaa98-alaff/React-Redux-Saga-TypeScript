import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Sorting.scss";
import dispatch from "../../redux/dispatch";
import * as actionTypes from "../../redux/actionTypes";

type Props = {
  items: Array<Object>;
  currentItems: any;
  brands: Array<Object>;
};

const Sorting: React.FC<Props> = ({ items, currentItems, brands }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const sortTypes = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];

  const handleChange = () => {
    const currentType = sortTypes?.[selectedIndex];

    if (brands?.length !== 0) {
      dispatch(actionTypes.SORTED_BRANDS_DATA, { currentType });
    } else {
      dispatch(actionTypes.SORTED_ITEMS_DATA, { currentType });
    }
  };

  useEffect(() => {
    handleChange();
    dispatch(actionTypes.SORTED_ITEMS_CLICKED, null);
  }, [selectedIndex]);

  return (
    <div className="main-sorting">
      <p className="main-sorting__title">Sorting</p>
      <div className="sorting-container">
        <div className="sorting-types">
          {sortTypes.map((type: any, index: number) => {
            return (
              <div key={index} className="sorting-types__type">
                <div
                  className={
                    index === selectedIndex ? "checkcirle active" : "checkcirle"
                  }
                  onClick={() => setSelectedIndex(index)}
                ></div>
                <div className="type-title">{type}</div>
              </div>
            );
          })}
        </div>
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

export default connect(mapStateToProps)(Sorting);
