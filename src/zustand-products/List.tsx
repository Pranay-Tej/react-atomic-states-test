import { useEffect } from "react";
import {
  fetchProducts,
  selectProducts,
  useProductsStore,
} from "./store/productsStore";

export const List = () => {
  const products = useProductsStore(selectProducts);


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
