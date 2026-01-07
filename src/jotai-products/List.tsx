import { useAtomValue } from "jotai";
import {
  fetchProducts,
  productsAtom,
} from "./store";
import { useEffect } from "react";

export const List = () => {
  const products = useAtomValue(productsAtom);

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
