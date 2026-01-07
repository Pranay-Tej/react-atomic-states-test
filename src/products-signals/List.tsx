import { useSignals } from "@preact/signals-react/runtime";
import { products } from "./store";

export const List = () => {
  "use no memo";

  useSignals();

  return (
    <div>
      {products.value.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
