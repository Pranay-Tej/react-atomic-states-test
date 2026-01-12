import { createBrowserRouter } from "react-router";

import HomePage from "./HomePage";
import { ZustandProducts } from "./zustand-products/ZustandProducts";
import { ValtioProducts } from "./valtio-products";
import { JotaiProducts } from "./jotai-products";
import { ProductsSignals } from "./products-signals";
import ZustandLogin from "./zustand-products/ZustandLogin";
import Zustand from "./zustand-products";
import { UseSyncExternalStoreProducts } from "./use-sync-external-store";
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
    Component: Zustand,
    children: [
      {
        path: "login",
        Component: ZustandLogin,
      },
      {
        path: "products",
        Component: ZustandProducts,
      },
    ],
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
  {
    path: "/use-sync-external-store",
    Component: UseSyncExternalStoreProducts,
  },
]);

export default router;
