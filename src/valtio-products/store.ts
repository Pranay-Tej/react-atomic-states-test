import { proxy } from "valtio";
import axios from "axios";
import { PER_PAGE } from "./constants";
import type { Category, Product, ProductResponse } from "./model";

export const state = proxy({
  products: [] as Product[],
  categories: [] as Category[],
  selectedCategory: "",
  page: 1,
  total: 0,
  get lastPage(){
    return Math.ceil(this.total / PER_PAGE);
  }
});

export const fetchCategories = async () => {
  try {
    const res = await axios.get<Category[]>(
      "https://dummyjson.com/products/categories"
    );
    state.categories = res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = async () => {
  try {
    const { page, selectedCategory } = state;
    let requestUrl = "https://dummyjson.com/products";

    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }

    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const res = await axios.get<ProductResponse>(requestUrl);
    
    state.products = res.data.products;
    state.total = res.data.total;
  } catch (error) {
    console.error(error);
  }
};