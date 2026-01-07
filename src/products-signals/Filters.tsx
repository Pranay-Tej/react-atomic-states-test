import { useEffect } from "react";
import { fetchCategories } from "./store";
import { categories, page, selectedCategory } from "./store";
import { batch } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

export const Filters = () => {
  useSignals();
  
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <select
        value={selectedCategory.value}
        onChange={(e) => {
          batch(() => {
            // write as a single update, trigger a single api call
            page.value = 1;
            selectedCategory.value = e.target.value;
          });
        }}
      >
        <option value="">All</option>
        {categories.value.map((category) => (
          <option value={category.name} key={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
