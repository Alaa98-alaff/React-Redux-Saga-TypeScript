import "./BasketBox.scss";

const BasketBox: React.FC = () => {
  return (
    <div className="main-basketbox">
      <div className="products">
        <div className="product-container">
          <div className="product-container__details">
            <div className="name">Example Product</div>
            <div className="price">$14,4</div>
          </div>
          <div className="product-container__handle">
            <span className="handle">-</span>
            <div className="amout-container">
              <div className="amout-container__amount">1</div>
            </div>
            <span className="handle">+</span>
          </div>
          <hr className="line" />
        </div>
      </div>
      <div className="total-container">
        <div className="total-container__total">$39</div>
      </div>
    </div>
  );
};

export default BasketBox;
