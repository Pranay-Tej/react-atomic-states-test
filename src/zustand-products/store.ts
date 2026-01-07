import { create } from "zustand";
import axios from "axios";
import { PER_PAGE } from "./constants";
import type { Category, Product, ProductResponse } from "./model";

type ProductStoreState = {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  page: number;
  total: number;
  actions: {
    setPage: (page: number) => void;
    setSelectedCategory: (category: string) => void;
    fetchCategories: () => Promise<void>;
    // fetchProducts: () => Promise<void>;
  };
};

export const useProductsStore = create<ProductStoreState>(
  (
    set
    // get
  ) => ({
    products: [],
    categories: [],
    selectedCategory: "",
    page: 1,
    total: 0,

    actions: {
      setPage: (page) => set({ page }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      fetchCategories: async () => {
        try {
          const res = await axios.get<Category[]>(
            "https://dummyjson.com/products/categories"
          );
          set({ categories: res.data });
        } catch (error) {
          console.error(error);
        }
      },
      // fetchProducts: async () => {
      //   const { page, selectedCategory } = get();

      //   try {
      //     let requestUrl = "https://dummyjson.com/products";
      //     if (selectedCategory) {
      //       requestUrl += `/category/${selectedCategory}`;
      //     }
      //     requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

      //     const res = await axios.get<ProductResponse>(requestUrl);

      //     set({
      //       products: res.data.products,
      //       total: res.data.total,
      //     });
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },
    },
  })
);

// actions can also be defined outside (Ex: all api calls in a different file)
export const fetchProducts = async () => {
  const { page, selectedCategory } = useProductsStore.getState();
  try {
    let requestUrl = "https://dummyjson.com/products";
    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }
    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const res = await axios.get<ProductResponse>(requestUrl);

    useProductsStore.setState({
      products: res.data.products,
      total: res.data.total,
    });
  } catch (error) {
    console.error(error);
  }
};

// selectors
export const selectProducts = (state: ProductStoreState) => state.products;
export const selectCategories = (state: ProductStoreState) => state.categories;
export const selectSelectedCategory = (state: ProductStoreState) =>
  state.selectedCategory;
export const selectPage = (state: ProductStoreState) => state.page;
export const selectTotal = (state: ProductStoreState) => state.total;

// derived selector
export const selectLastPage = (state: ProductStoreState) =>
  Math.ceil(state.total / PER_PAGE);

// all actions as single hook export
export const useProductStoreActions = () => useProductsStore((state) => state.actions);
