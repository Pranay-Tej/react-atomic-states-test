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
        Requires transform babel plugin or useSignals() at every component level 
      </p>
      <pre>{msg}</pre>
      <p>
        Not working as expected along
        with react compiler
        .Will need &apos;use no memo&apos; opt-out
      </p>
      <Filters />
      <List />
      <Pagination />
    </>
  );
};
