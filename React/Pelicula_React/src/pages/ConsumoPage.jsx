import ConsumoComponent from "../components/ConsumoComponent";
import { useEffect, useState } from "react";

const ConsumoPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {products.map((product) => (
        <ConsumoComponent
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        ></ConsumoComponent>
      ))}
    </div>
  );
};

export default ConsumoPage;