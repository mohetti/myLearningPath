export const Ship = (n: number) => {
  let shipLength = n;

  const hit = () => {
    shipLength--;
    return !!shipLength;
  };
  return { hit };
};
