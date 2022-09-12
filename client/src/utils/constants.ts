export const formatChangeNumber = (n: number) => {
  return new Intl.NumberFormat().format(n);
};
