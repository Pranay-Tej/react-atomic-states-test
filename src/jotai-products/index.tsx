import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const JotaiProducts = () => {
  return (
    <>
      <h2>Jotai Products demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
