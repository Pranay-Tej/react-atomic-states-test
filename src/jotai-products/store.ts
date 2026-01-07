import type { Category, Product, ProductResponse } from "./model";
// import { fetchProducts } from "./api";
import { PER_PAGE } from "./constants";
import axios from "axios";
import { atom, getDefaultStore } from "jotai";

const store = getDefaultStore();

export const productsAtom = atom<Product[]>([]);
export const categoriesAtom = atom<Category[]>([]);
export const selectedCategoryAtom = atom<string>("");
export const pageAtom = atom<number>(1);
export const totalAtom = atom<number>(0);

// computed
export const lastPageAtom = atom((get) => Math.ceil(get(totalAtom) / PER_PAGE));

// api calls
export const fetchCategories = async () => {
  try {
    const categoriesResponse = await axios.get<Category[]>(
      "https://dummyjson.com/products/categories"
    );

    store.set(categoriesAtom, categoriesResponse.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = async () => {
  const selectedCategory = store.get(selectedCategoryAtom);
  const page = store.get(pageAtom);
  try {
    let requestUrl = "https://dummyjson.com/products";

    if (selectedCategory) {
      requestUrl += `/category/${selectedCategory}`;
    }

    requestUrl += `?limit=${PER_PAGE}&skip=${(page - 1) * PER_PAGE}`;

    const productsResponse = await axios.get<ProductResponse>(requestUrl);
    store.set(productsAtom, productsResponse.data.products);
    store.set(totalAtom, productsResponse.data.total);
  } catch (error) {
    console.error(error);
  }
};

// side effects
// const runFetch = () =>
//   fetchProducts({
//     page: store.get(pageAtom),
//     selectedCategory: store.get(selectedCategoryAtom),
//   });

// store.sub(pageAtom, runFetch);
// store.sub(selectedCategoryAtom, runFetch);
