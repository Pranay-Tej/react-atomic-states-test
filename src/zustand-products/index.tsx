import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";
import {
  selectIsAuthenticated,
  useAuthStore,
  useAuthStoreActions,
} from "./store/authStore";
import { fetchProductsUnauthenticated } from "./store/productsStore";

export const Login = () => {
  const { login } = useAuthStoreActions();

  return (
    <div>
      <button onClick={() => login("zustand-user")}>Login</button>
    </div>
  );
};

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
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <h2>Zustand Products demo</h2>
      <Logout />
      <SimulatedUnauthenticatedAccess />
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
