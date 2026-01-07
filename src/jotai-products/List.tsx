import { useAtomValue } from "jotai";
import {
  fetchProducts,
  pageAtom,
  productsAtom,
  selectedCategoryAtom,
} from "./store";
import { useEffect } from "react";

export const List = () => {
  const products = useAtomValue(productsAtom);
  const page = useAtomValue(pageAtom);
  const selectedCategory = useAtomValue(selectedCategoryAtom);

  useEffect(() => {
    fetchProducts({
      page,
      selectedCategory,
    });
  }, [page, selectedCategory]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
