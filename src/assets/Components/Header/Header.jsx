import "./header.css";
import logoDeliveroo from "../../Images/logo-teal.svg";

const Header = (props) => {
  return (
    <header>
      <div className="wrap-header">
        <img src={logoDeliveroo} alt="logo Deliveroo" title="Logo Deliveroo" />
      </div>
    </header>
  );
};

export default Header;
