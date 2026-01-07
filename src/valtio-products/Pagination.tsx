import { useSnapshot } from "valtio";
import { fetchProducts, state } from "./store";

export const Pagination = () => {
  const snap = useSnapshot(state);

  const handlePagination = (offset: number) => {
    state.page += offset;
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