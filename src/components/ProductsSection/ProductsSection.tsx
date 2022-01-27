import "./ProductsSection.scss";

const ProductsSection: React.FC = () => {
  return (
    <div className="main-section">
      <h4 className="section-title">Products</h4>
      <div className="item-types">
        <button className="item-types__mug">mug</button>
        <button className="item-types__shirt">shirt</button>
      </div>
      <div className="products-section"></div>;
    </div>
  );
};

export default ProductsSection;