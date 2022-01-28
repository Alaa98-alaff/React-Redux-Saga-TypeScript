import "./ProductsSection.scss";
import ProductCard from "../ProductCard/ProductCard";
import { connect } from "react-redux";

type Props = {
  items: Array<Object>;
};

const ProductsSection: React.FC<Props> = ({ items }) => {
  console.log(items?.slice(0, 16));
  return (
    <div className="main-section">
      <h4 className="section-title">Products</h4>
      <div className="item-types">
        <button className="item-types__mug">mug</button>
        <button className="item-types__shirt">shirt</button>
      </div>
      <div className="products-section">
        {items
          ? items
              ?.slice(0, 16)
              .map((el: any) => <ProductCard name={el.name} price={el.price} />)
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.itemsReducer.items,
  };
};

export default connect(mapStateToProps)(ProductsSection);
