import { useState } from "react";
import "./App.css";
import { JotaiProducts } from "./jotai-products";
import { ProductsSignals } from "./products-signals";
import { ValtioProducts } from "./valtio-products";
import { ZustandProducts } from "./zustand-products";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <header>
        <select
          value={page}
          onChange={(e) => {
            setPage(Number(e.target.value));
          }}
        >
          <option value="1">Valtio</option>
          <option value="2">Jotai</option>
          <option value="3">Zustand</option>
          <option value="4">Preact Signals</option>
        </select>
      </header>

      {page == 1 && <ValtioProducts />}
      {page == 2 && <JotaiProducts />}
      {page == 3 && <ZustandProducts />}
      {page == 4 && <ProductsSignals />}
    </>
  );
}

export default App;
