import { useEffect } from "react";
import { fetchProducts, useProductsSnapshot } from "./store";

export const List = () => {
  const snap = useProductsSnapshot();

  // useOnMount(() => {
  //   fetchProducts();
  // });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {snap.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
