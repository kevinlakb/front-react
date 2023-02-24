import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "./types/Product";

interface CatalogProps {
  products: Product[];
}

const Catalog: React.FC<CatalogProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="catalog">
      <div className="search">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
