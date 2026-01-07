import { useAtom, useAtomValue } from "jotai";
import { lastPageAtom, pageAtom } from "./store";

export const Pagination = () => {
  const [page, setPage] = useAtom(pageAtom);
  const lastPage = useAtomValue(lastPageAtom);

  const handlePagination = (offset: number) => {
    setPage(page + offset);
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <button onClick={() => handlePagination(-1)} disabled={page === 1}>
        Prev
      </button>
      <span>{page}</span>
      <button
        onClick={() => handlePagination(1)}
        disabled={page === lastPage}
      >
        Next
      </button>
    </div>
  );
};
