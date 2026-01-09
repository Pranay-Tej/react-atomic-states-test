import { createBrowserRouter } from "react-router";

import HomePage from "./HomePage";
import { ZustandProducts } from "./zustand-products";
import { ValtioProducts } from "./valtio-products";
import { JotaiProducts } from "./jotai-products";
import { ProductsSignals } from "./products-signals";
// import MainLayout from "./MainLayout";

const router = createBrowserRouter([
  {
    index: true,
    Component: HomePage,
  },
//   {
//     Component: MainLayout,
//     children: [
//       {
//         path: "/zustand-products",
//         Component: ZustandProducts,
//       },
//       {
//         path: "/valtio-products",
//         Component: ValtioProducts,
//       },
//       {
//         path: "/jotai-products",
//         Component: JotaiProducts,
//       },
//       {
//         path: "/products-signals",
//         Component: ProductsSignals,
//       },
//     ],
//   },
  {
    path: "/zustand-products",
    Component: ZustandProducts,
  },
  {
    path: "/valtio-products",
    Component: ValtioProducts,
  },
  {
    path: "/jotai-products",
    Component: JotaiProducts,
  },
  {
    path: "/products-signals",
    Component: ProductsSignals,
  },
]);

export default router;
