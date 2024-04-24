import { IoCartOutline } from "react-icons/io5";

import "./ProductCard.css";

const ProductCard: React.FC = () => {
  return (
    <div className="ProductCard">
      <div className="productImage"></div>
      <div className="productInfo">
        <h3 className="productInfo__category">Perfume</h3>
        <h2 className="productInfo__productName">
          Gabrielle Essence Eau de Parfum
        </h2>
        <p className="productInfo__description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <span className="productInfo__price">
          $149.99 <span className="price__regularPrice">$169.99</span>
        </span>
        <a href="#" className="addToCartButton">
          <IoCartOutline style={{ fontSize: "1.3em", marginLeft: "-.5em" }} />
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
