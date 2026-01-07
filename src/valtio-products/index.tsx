import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const ValtioProducts = () => {
  return (
    <>
      <h2>Valtio Products demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
