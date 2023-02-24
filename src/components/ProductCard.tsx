import React from "react";
import { Product } from "./types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image.url}
        alt={product.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: {product.price}</p>
        <p className="card-text">In stock: {product.stockQuantity}</p>
        <a href={product.permalink} className="btn btn-primary">
          View Product
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
