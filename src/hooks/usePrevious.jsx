import { useEffect, useRef } from 'react';
// custom hook to get the previous state
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
}

export default usePrevious;
