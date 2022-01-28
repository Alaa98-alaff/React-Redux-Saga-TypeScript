import "./ProductCard.scss";

interface Props {
  name?: string;
  price?: number;
}

const ProductCard: React.FC<Props> = ({ name, price }) => {
  return (
    <div className="productcard-container">
      <div className="image-container">
        <img className="image-container__image" src="" alt="" />
      </div>
      <div className="product-description">
        <div className="product-description__price">₺ {price}</div>
        <div className="product-description__name">{name}</div>
      </div>
      <button className="addproduct-btn">Add</button>
    </div>
  );
};

export default ProductCard;
