// Utility functions for the application

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
