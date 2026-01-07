import { useEffect } from "react";
import { fetchCategories } from "./store";
import { categoriesAtom, pageAtom, selectedCategoryAtom } from "./store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const categories = useAtomValue(categoriesAtom);
  const setPage = useSetAtom(pageAtom);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => {
            // write as a single update, trigger a single api call?
            setPage(1);
            setSelectedCategory(e.target.value);
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
