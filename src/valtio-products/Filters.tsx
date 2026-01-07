import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchCategories, fetchProducts, state } from "./store";

export const Filters = () => {
  const snap = useSnapshot(state);

  // useOnMount(() => {
  //   fetchCategories();
  // });

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <div>
      <select
        value={snap.selectedCategory}
        onChange={(e) => {
          console.log("onChange called");
          state.page = 1; 
          state.selectedCategory = e.target.value;   
          fetchProducts();       
        }}
      >
        <option value="">All</option>
        {snap.categories.map((category) => (
          <option value={category.name} key={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};