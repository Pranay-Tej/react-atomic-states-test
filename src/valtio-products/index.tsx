import Nav from "../Nav";
import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const ValtioProducts = () => {
  return (
    <>
      <Nav />

      <h2>Valtio Products demo</h2>
      <p>has eslint: eslint-plugin-valtio</p>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
