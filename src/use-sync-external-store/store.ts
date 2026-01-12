import type { Category, Product, ProductResponse } from "./model";
import { PER_PAGE } from "./constants";
import axios from "axios";

let products: Product[] = [];
let categories: Category[] = [];
let selectedCategory: string = "";
let page: number = 1;
let total: number = 0;

const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export const productsStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    // unsub
    return () => listeners.delete(listener);
  },
  // getters
  getTodos() {
    return products;
  },
  getCategories() {
    return categories;
  },
  getSelectedCategory() {
    return selectedCategory;
  },
  getPage() {
    return page;
  },
  getTotal() {
    return total;
  },
  // computed
  getLastPage() {
    if (total === 0) {
      return 1;
    }
    return Math.ceil(total / PER_PAGE);
  },
  // actions
  setCategory(category: string) {
    selectedCategory = category;
    page = 1; // reset to first page
    emitChange();
  },
  setPage(newPage: number) {
    page = newPage;
    emitChange();
  },
  // api calls
  async fetchCategories() {
    try {
      const categoriesResponse = await axios.get<Category[]>(
        "https://dummyjson.com/products/categories"
      );
      categories = categoriesResponse.data;
      emitChange();
    } catch (error) {
      console.error(error);
    }
  },
  async fetchProducts() {
    try {
      let requestUrl = "https://dummyjson.com/products";
      if (selectedCategory) {
        requestUrl += `/category/${selectedCategory}`;
      }
      const url = new URL(requestUrl);
      url.searchParams.append("limit", PER_PAGE.toString());
      url.searchParams.append("skip", ((page - 1) * PER_PAGE).toString());

      const productsResponse = await axios.get<ProductResponse>(url.toString());
      products = productsResponse.data.products;
      total = productsResponse.data.total;
      emitChange();
    } catch (error) {
      console.error(error);
    }
  },
};
