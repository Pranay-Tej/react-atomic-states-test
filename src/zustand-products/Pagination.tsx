import { useProductsStore, selectLastPage, selectPage, useProductStoreActions, fetchProducts } from "./store/productsStore";

export const Pagination = () => {
  const page = useProductsStore(selectPage);
  const { setPage } = useProductStoreActions();

  const lastPage = useProductsStore(selectLastPage);

  const handlePagination = (offset: number) => {
    setPage(page + offset);
    fetchProducts();
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
