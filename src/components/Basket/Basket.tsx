import "./Basket.scss";
import basket from "../../assets/images/basket.png";

const Basket: React.FC = () => {
  return (
    <div className="basket-container">
      <div className="basket-container__basket-logo">
        <img className="basket-logo" src={basket} alt="Basket" />
      </div>
      <div className="basket-container__total">₺ 39,97</div>
    </div>
  );
};

export default Basket;
