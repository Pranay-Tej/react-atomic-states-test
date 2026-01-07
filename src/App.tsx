import "./App.css";
import { JotaiProducts } from "./jotai-products";
import { ProductsSignals } from "./products-signals";

function App() {
  return (
    <>
      <JotaiProducts />
      <hr />
      <ProductsSignals />
    </>
  );
}

export default App;
