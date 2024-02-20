import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const slicedProducts = res.data.products.slice(0, 10);
      setProducts(slicedProducts);
    });
  }, []);

  return (
    <>
      <div>
        <span>Trending Products 🔥</span>
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
        <div className="view-all">
          <Link to="/products">View All Products</Link>
        </div>
      </div>
    </>
  );
};
