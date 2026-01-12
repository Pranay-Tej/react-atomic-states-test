import { useSyncExternalStore } from "react";
import { productsStore } from "./store";

export const Pagination = () => {
  const page = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getPage
  );
  const lastPage = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getLastPage
  );

  const handlePagination = (offset: number) => {
    productsStore.setPage(page + offset);
    productsStore.fetchProducts();
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <button onClick={() => handlePagination(-1)} disabled={page === 1}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => handlePagination(1)} disabled={page === lastPage}>
        Next
      </button>
    </div>
  );
};
