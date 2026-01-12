import { useEffect, useSyncExternalStore } from "react";
import { productsStore } from "./store";

export const Filters = () => {
  const selectedCategory = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getSelectedCategory
  );
  const categories = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getCategories
  );
  useEffect(() => {
    productsStore.fetchCategories();
  }, []);

  return (
    <div>
      <select
        value={selectedCategory || ""}
        onChange={(e) => {
          productsStore.setCategory(e.target.value);
          productsStore.fetchProducts();
        }}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option value={category.name} key={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
