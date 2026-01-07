import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchProducts, state } from "./store";

export const List = () => {
  const snap = useSnapshot(state);

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
