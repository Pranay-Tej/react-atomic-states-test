import { proxy, useSnapshot } from "valtio";
import axios from "axios";
import { PER_PAGE } from "./constants";
import type { Category, Product, ProductResponse } from "./model";

const productsState = proxy({
  products: [] as Product[],
  categories: [] as Category[],
  selectedCategory: "",
  page: 1,
  total: 0,
  get lastPage() {
    return Math.ceil(this.total / PER_PAGE);
  },
});

export const useProductsSnapshot = () => {
  const snap = useSnapshot(productsState);
  return snap;
};

// a single actions export
export const productActions = {
  offsetPage(offset: number) {
    productsState.page += offset;
  },
  setSelectedCategory(category: string) {
    productsState.selectedCategory = category;
    productsState.page = 1;
  },
};

// or per-action exports
export const fetchCategories = async () => {
  try {
    const res = await axios.get<Category[]>(
      "https://dummyjson.com/products/categories"
    );
    productsState.categories = res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = async () => {
  try {
    const { page, selectedCategory } = productsState;
    let requestUrl = "https://dummyjson.com/products";

    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }

    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const res = await axios.get<ProductResponse>(requestUrl);

    productsState.products = res.data.products;
    productsState.total = res.data.total;
  } catch (error) {
    console.error(error);
  }
};
