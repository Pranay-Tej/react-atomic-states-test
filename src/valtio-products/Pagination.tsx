import { fetchProducts, productActions, useProductsSnapshot } from "./store";

export const Pagination = () => {
  const snap = useProductsSnapshot();

  const handlePagination = (offset: number) => {
    productActions.offsetPage(offset);
    fetchProducts();
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <button 
        onClick={() => handlePagination(-1)} 
        disabled={snap.page === 1}
      >
        Prev
      </button>
      
      <span>{snap.page}</span>
      
      <button
        onClick={() => handlePagination(1)}
        disabled={snap.page === snap.lastPage}
      >
        Next
      </button>
    </div>
  );
};