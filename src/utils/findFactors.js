export const findFactors = (number, range) => {
  if (number && range) {
    return [...Array(range + 1).keys()].filter(
      (i) => i !== 0 && i % number === 0
    );
  }
  return [];
};
