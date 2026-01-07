import type { Category, Product, ProductResponse } from "./models";
import { computed, effect, signal } from "@preact/signals-react";
// import { fetchProducts } from "./api";
import { PER_PAGE } from "./constants";
import axios from "axios";

export const products = signal<Product[]>([]);
export const categories = signal<Category[]>([]);
export const selectedCategory = signal<string>("");
export const page = signal<number>(1);
export const total = signal<number>(0);

// computed
export const lastPage = computed(() => Math.ceil(total.value / PER_PAGE));

// api calls
export const fetchCategories = async () => {
  try {
    // no need for AxiosResponse<T>, inferred from .get<T>
    const categoriesResponse = await axios.get<Category[]>(
      "https://dummyjson.com/products/categories"
    );

    categories.value = categoriesResponse.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchProducts = async ({
  page,
  selectedCategory,
}: {
  page: number;
  selectedCategory: string;
}) => {
  try {
    let requestUrl = "https://dummyjson.com/products";

    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }

    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const productsResponse = await axios.get<ProductResponse>(requestUrl);
    products.value = productsResponse.data.products;
    total.value = productsResponse.data.total;
  } catch (error) {
    console.error(error);
  }
};

// side effects
effect(() => {
  // will only run once if the updates are done using batch()
  fetchProducts({
    page: page.value,
    selectedCategory: selectedCategory.value,
  });
});
