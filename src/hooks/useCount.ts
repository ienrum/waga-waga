import { useEffect, useRef } from 'react';

const useCount = (ms: number) => {
  const count = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      count.current += 1;
    }, ms);
    return () => clearTimeout(timeout);
  }, [ms]);
  return count;
};

export default useCount;
