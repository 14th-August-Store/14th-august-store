import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        <div className="footer-box">

          <h2>
            14th August Store
          </h2>

          <p>
            Celebrate Pakistan's Independence with
            quality products and special offers.
          </p>

        </div>



        <div className="footer-box">

          <h3>
            Quick Links
          </h3>


          <Link to="/">
            🏠 Home
          </Link>


          <Link to="/shop">
            🛍️ Shop
          </Link>


          <Link to="/cart">
            🛒 Cart
          </Link>


          <Link to="/contact">
            📞 Contact
          </Link>


        </div>




        <div className="footer-box">

          <h3>
            Contact
          </h3>

          <p>
            📍 Karachi, Pakistan
          </p>

          <p>
            📱 +92 313 2785808
          </p>

          <p>
            ✉️ rizwanchanna6@gmail.com
          </p>


        </div>


      </div>



      <div className="footer-bottom">

        © 2026 14th August Store 🇵🇰

      </div>


    </footer>

  );

}


export default Footer;