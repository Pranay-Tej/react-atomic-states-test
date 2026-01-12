import Nav from "../Nav";
import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const UseSyncExternalStoreProducts = () => {
  return (
    <>
      <Nav />
      <h2>UseSyncExternalStore demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
