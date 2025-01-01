export const calculateInitialLimit = () => {
  const viewPort = window.innerHeight;
  const estimatedItemHeight = 164;
  const buffer = 2;
  return Math.ceil(viewPort / estimatedItemHeight) + buffer;
};
