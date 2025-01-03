import { useCallback, useContext, useDeferredValue, useState } from "react";
import { CountContext } from "../lib/count-context";

export function Counter() {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);
  console.log(count);
  console.log(deferredCount);

  const incerement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const decrement = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );
  return (
    <>
      <header>Counter</header>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={incerement}>+</button>
        <button onClick={decrement}>-</button>
      </form>
      <CountContext.Provider value={count}>
        <CountDisplay />
      </CountContext.Provider>
      <p>{deferredCount}</p>
    </>
  );
}

const CountDisplay = () => {
  const count = useContext(CountContext);
  return (
    <>
      <p>{count}</p>
    </>
  );
};
