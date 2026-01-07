import { useEffect, useRef } from "react";

function useOnMount(callback: () => void) {
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (isMounted.current) {
      console.log("useOnMount called");
      isMounted.current = true;
      callback();
    }
  }, [callback]);
}

export default useOnMount;
