import products from "../data/products";
import ProductCard from "./ProductCard";
import "../css/product.css";

function Products() {
  return (
    <section className="products">

      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;