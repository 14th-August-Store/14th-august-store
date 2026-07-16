import "../css/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Countdown */}
      <Countdown />

      {/* Featured Products */}
      <Products />

      {/* Independence Day Offer */}
      <section className="offer">
        <h2>🇵🇰 14 August Mega Sale</h2>
        <p>Enjoy up to <strong>70% OFF</strong> on selected products.</p>
        <h3>Use Coupon: <span>AZADI14</span></h3>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div className="feature">
            <h3>🚚 Free Delivery</h3>
            <p>Free shipping on eligible orders.</p>
          </div>

          <div className="feature">
            <h3>💳 Secure Payment</h3>
            <p>Safe and trusted payment methods.</p>
          </div>

          <div className="feature">
            <h3>⭐ Quality Products</h3>
            <p>Premium products at affordable prices.</p>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Home;