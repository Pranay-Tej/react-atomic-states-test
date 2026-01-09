import Nav from "../Nav";
import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";
import { useAuthStoreActions } from "./store/authStore";
import { fetchProductsUnauthenticated } from "./store/productsStore";

export const Logout = () => {
  const { logout } = useAuthStoreActions();

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export const SimulatedUnauthenticatedAccess = () => {
  return (
    <div>
      <button onClick={fetchProductsUnauthenticated}>
        Simulate Unauthenticated Access
      </button>
    </div>
  );
};

export const ZustandProducts = () => {
  return (
    <>
      <Nav />
      <h2>Zustand Products demo</h2>
      <Logout />
      <SimulatedUnauthenticatedAccess />
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
