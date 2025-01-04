import {
  useCallback,
  useContext,
  useDeferredValue,
  useReducer,
  useState,
} from "react";
import { CountContext } from "../lib/count-context";
import { counterReducer } from "../reducers/counter";

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

  const [reducerCount, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <header>Counter</header>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={incerement}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={decrement}>-</button>
      </form>
      <CountContext.Provider value={reducerCount}>
        <CountDisplay />
      </CountContext.Provider>
      <CountContext.Provider value={count}>
        <CountDisplay />
      </CountContext.Provider>
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
