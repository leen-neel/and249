export const toNormalCase = (str: string | undefined) => {
  return str?.charAt(0).toUpperCase() + str!.substring(1).toLowerCase();
};
