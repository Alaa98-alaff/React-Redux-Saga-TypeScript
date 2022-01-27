import "./ProductCard.scss";

const ProductCard: React.FC = () => {
  return (
    <div className="productcard-container">
      <div className="image-container">
        <img className="image-container__image" src="" alt="" />
      </div>
      <div className="product-description">
        <div className="product-description__price">₺ 14,99</div>
        <div className="product-description__name">Gorgeous Office Mug</div>
      </div>
      <button className="addproduct-btn">Add</button>
    </div>
  );
};

export default ProductCard;
