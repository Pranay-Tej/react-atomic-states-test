import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const ProductsSignals = () => {
  return (
    <>
      <h2>Preact Signals demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
