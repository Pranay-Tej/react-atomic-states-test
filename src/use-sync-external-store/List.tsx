import { useEffect, useSyncExternalStore } from "react";
import { productsStore } from "./store";

export const List = () => {
  const products = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getTodos
  );

  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
