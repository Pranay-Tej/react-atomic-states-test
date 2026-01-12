import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Atomic States</h1>
      <ul>
        <li>
          <Link to="/zustand-products/login">Zustand Products Demo</Link>
        </li>
        <li>
          <Link to="/valtio-products">Valtio Products Demo</Link>
        </li>
        <li>
          <Link to="/jotai-products">Jotai Products Demo</Link>
        </li>
        <li>
          <Link to="/products-signals">Preact Signals Products Demo</Link>
        </li>
        <li>
          <Link to="/use-sync-external-store">UseSyncExternalStore Demo</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
