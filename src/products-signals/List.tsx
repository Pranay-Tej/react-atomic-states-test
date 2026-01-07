import { useSignals } from "@preact/signals-react/runtime";
import { products } from "./store";

export const List = () => {
  useSignals();

  return (
    <div>
      {products.value.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
