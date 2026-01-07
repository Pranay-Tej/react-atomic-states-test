import { lastPage, page } from "./store";
import { useSignals } from "@preact/signals-react/runtime";

export const Pagination = () => {
  useSignals()
  
  const handlePagination = (offset: number) => {
    page.value = page.value + offset;
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <button onClick={() => handlePagination(-1)} disabled={page.value === 1}>
        Prev
      </button>
      <span>{page.value}</span>
      <button
        onClick={() => handlePagination(1)}
        disabled={page.value === lastPage.value}
      >
        Next
      </button>
    </div>
  );
};
