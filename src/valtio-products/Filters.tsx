import { useEffect } from "react";
import { fetchCategories, fetchProducts, productActions, useProductsSnapshot } from "./store";

export const Filters = () => {
  const snap = useProductsSnapshot();
  

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
          productActions.setSelectedCategory(e.target.value); 
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