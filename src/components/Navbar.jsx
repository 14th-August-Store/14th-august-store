import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaStore, FaPhoneAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../css/navbar.css";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>14th August Store</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/shop">
            <FaStore /> Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            Cart
            <span className="cart-count">{cart.length}</span>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FaPhoneAlt /> Contact
          </Link>
        </li>
      </ul>

      <button className="sale-btn">
        🇵🇰 14 August Sale
      </button>
    </nav>
  );
}

export default Navbar;