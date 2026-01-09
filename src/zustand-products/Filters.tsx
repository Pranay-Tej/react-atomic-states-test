import { useEffect } from "react";
import {
  fetchProducts,
  selectCategories,
  selectSelectedCategory,
  useProductsStore,
  useProductStoreActions,
} from "./store/productsStore";

export const Filters = () => {
  const categories = useProductsStore(selectCategories);
  const selectedCategory = useProductsStore(selectSelectedCategory);

  const { fetchCategories, setPage, setSelectedCategory } = useProductStoreActions();

  useEffect(() => {
      fetchCategories();
  }, []);

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => {
          setPage(1);
          setSelectedCategory(e.target.value);
          fetchProducts()
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
