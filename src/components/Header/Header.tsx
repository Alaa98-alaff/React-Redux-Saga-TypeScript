import "./Header.scss";
import logo from "../../assets/images/Logo.png";
import Basket from "../Basket/Basket";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <img className="logo" src={logo} alt="logo" />
      <Basket />
    </div>
  );
};

export default Header;
