import { useState } from "react";
import "./App.css";
import { JotaiProducts } from "./jotai-products";
import { ProductsSignals } from "./products-signals";
import { ValtioProducts } from "./valtio-products";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <select
        value={page}
        onChange={(e) => {
          setPage(Number(e.target.value));
        }}
      >
        <option value="1">Preact Signals</option>
        <option value="2">Jotai</option>
        <option value="3">Valtio</option>
      </select>

      {page == 1 && <ProductsSignals />}
      {page == 2 && <JotaiProducts />}
      {page == 3 && <ValtioProducts />}
    </>
  );
}

export default App;
