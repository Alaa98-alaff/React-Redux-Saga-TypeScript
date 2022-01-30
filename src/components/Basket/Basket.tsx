import "./Basket.scss";
import basket from "../../assets/images/basket.png";
import { connect } from "react-redux";

type Props = {
  totalPrice: Number;
};

const Basket: React.FC<Props> = ({ totalPrice }) => {
  return (
    <div className="basket-container">
      <div className="basket-container__basket-logo">
        <img className="basket-logo" src={basket} alt="Basket" />
      </div>
      <div className="basket-container__total">₺ {totalPrice}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    totalPrice: state.basketItemsReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(Basket);
