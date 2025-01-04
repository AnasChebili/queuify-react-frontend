export const counterReducer = (count: number, action: { type: string }) => {
  switch (action.type) {
    case "increment": {
      return count + 1;
    }
    case "decrement": {
      return count - 1;
    }
  }
  return 0;
};
