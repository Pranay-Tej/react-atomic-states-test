import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const ZustandProducts = () => {
  return (
    <>
      <h2>Zustand Products demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
