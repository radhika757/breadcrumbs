import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const allProducts = res.data.products;
      setProducts(allProducts);
    });
  }, []);

  return (
    <>
      <div className="product-grid">
        {products.map((data) => {
          return (
            <div key={data?.id} className="product-card">
              <Link to={`/products/${data?.id}`}>
                <img src={data?.thumbnail} alt={data?.title} />
                <h3>{data?.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
