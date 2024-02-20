import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <>
      <h2>Product Detail Page</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
