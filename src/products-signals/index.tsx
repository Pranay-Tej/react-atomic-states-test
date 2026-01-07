import { Filters } from "./Filters";
import { List } from "./List";
import { Pagination } from "./Pagination";
const msg = `export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler"],
          ["module:@preact/signals-react-transform"],
        ],
      },
    }),
  ],
});`;

export const ProductsSignals = () => {
  "use no memo";

  return (
    <>
      <h2>Preact Signals demo</h2>
      <p>
        Requires transform babel plugin and is not working as expected along
        with react compiler
      </p>
      <p>
        will need use-no-memo opt-out
      </p>
      <pre>{msg}</pre>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
