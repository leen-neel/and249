export const toNormalCase = (str: string) => {
  str?.charAt(0).toUpperCase() + str!.substring(1).toLowerCase();
};
