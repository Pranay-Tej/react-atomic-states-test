import Nav from "../Nav";
import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const JotaiProducts = () => {
  return (
    <>
      <Nav />
      <h2>Jotai Products demo</h2>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
